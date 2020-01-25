const { connection, cloudinary } = require("../conf");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });
const passport = require("passport");

//Get all ambassadors order by name
router.get("/", (req, res) => {
  connection.query(
    `SELECT * FROM ambassador ORDER BY firstname ASC`,
    (err, ambassadorResults) => {
      if (err)
        return res.status(500).send("Error in obtaining ambassadors's infos !");
      connection.query(
        "SELECT * FROM ambassador_has_tag",
        (err, tagResults) => {
          if (err)
            return res
              .status(500)
              .send("Error in obtaining ambassadors's infos !");
          const newAmbassadorResults = JSON.parse(
            JSON.stringify(ambassadorResults)
          );
          const newTagResults = JSON.parse(JSON.stringify(tagResults));
          newAmbassadorResults.map(ambassador => {
            const tagList = newTagResults.filter(tag => {
              return tag.id_ambassador == ambassador.id;
            });
            const arrayTag = [];
            tagList.map(tag => {
              delete tag.id_ambassador;
              const tempArrayTag = Object.values(tag);
              arrayTag.push(parseInt(tempArrayTag));
            });
            ambassador.tagList = arrayTag;
          });
          return res.status(200).json(newAmbassadorResults);
        }
      );
    }
  );
});

//Get an ambassador by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM ambassador WHERE id = ?",
    [id],
    (err, ambassadorResults) => {
      if (err)
        return res.status(500).send("Error in obtaining ambassador's info !");
      if (ambassadorResults.length === 0)
        return res
          .status(204)
          .send("There is no info corresponding to your research.");
      connection.query(
        "SELECT * FROM ambassador_has_tag WHERE id_ambassador = ?",
        [ambassadorResults[0].id],
        (err, tagResults) => {
          if (err)
            return res
              .status(500)
              .send("Error in obtaining ambassador's infos !");
          const newAmbassadorResults = JSON.parse(
            JSON.stringify(ambassadorResults)
          );
          const newTagResults = JSON.parse(JSON.stringify(tagResults));
          const arrayTag = [];
          newTagResults.map(tag => {
            delete tag.id_ambassador;
            const tempArrayTag = Object.values(tag);
            arrayTag.push(parseInt(tempArrayTag));
          });
          newAmbassadorResults[0].tagList = arrayTag;
          return res.status(200).json(newAmbassadorResults);
        }
      );
    }
  );
});

//-----------------------------------------------------------------------------Private routes

router.use((req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return res.status(500).send(err, info);
    if (!user) return res.status(401).send("Unauthorized !");
    next();
  })(req, res);
});

//Post a new ambassador
router.post("/", upload.single("img"), (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { transformation: { width: 350, height: 350, crop: "fill" } },
    (err, result) => {
      if (err)
        return res
          .status(500)
          .send("Error has occured during the upload of the image !");
      req.body.img = result.url;
      const id_tag = req.body.id_tag;
      delete req.body.id_tag;
      connection.query(
        "INSERT INTO ambassador SET ?",
        [req.body],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send(
                "Error has occured during the creation of the new ambassador !"
              );
          const { insertId } = results;
          const tagData = id_tag.map(tag => {
            return [insertId, tag];
          });
          connection.query(
            "INSERT INTO ambassador_has_tag (id_ambassador, id_tag) VALUES ?",
            [tagData],
            (err, results) => {
              if (err)
                return res
                  .status(500)
                  .send(
                    "Error has occured during the attribution of the tag !"
                  );
              return res.status(201).send("Ambassador created.");
            }
          );
        }
      );
    }
  );
});

//Modify an ambassador by id
router.patch("/:id", upload.single("img"), async (req, res) => {
  if (req.file) {
    await cloudinary.v2.uploader.upload(
      req.file.path,
      { transformation: { width: 350, height: 350, crop: "fill" } },
      (err, result) => {
        if (err)
          return res
            .status(500)
            .send("Error has occured during the upload of the image !");
        req.body.img = result.url;
      }
    );
  }
  const id = Number(req.params.id);
  let id_tag = [];
  if (req.body.id_tag) {
    id_tag = req.body.id_tag;
    delete req.body.id_tag;
  }
  connection.query(
    "UPDATE ambassador SET ? WHERE id = ?",
    [req.body, id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in modifying the ambassador.");
      if (id_tag) {
        connection.query(
          "DELETE FROM ambassador_has_tag WHERE id_ambassador = ?",
          [id],
          (err, results) => {
            if (err)
              return res.status(500).send("Error in modifying the ambassador.");
            const tagData = id_tag.map(tag => {
              return [id, tag];
            });
            connection.query(
              "INSERT INTO ambassador_has_tag (id_ambassador, id_tag) VALUES ?",
              [tagData],
              (err, results) => {
                if (err)
                  return res
                    .status(500)
                    .send(
                      "Error has occured during the attribution of the tag !" +
                        err
                    );
                return res.sendStatus(200);
              }
            );
          }
        );
      } else {
        return res.sendStatus(200);
      }
    }
  );
});

//Delete an ambassador by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    "DELETE FROM ambassador_has_tag WHERE id_ambassador = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).send("Error in deleting the ambassador.");
      connection.query(
        "DELETE FROM ambassador WHERE id = ?",
        [id],
        (err, results) => {
          if (err)
            return res.status(500).send("Error in deleting the ambassador.");
          return res.sendStatus(200);
        }
      );
    }
  );
});

module.exports = router;
