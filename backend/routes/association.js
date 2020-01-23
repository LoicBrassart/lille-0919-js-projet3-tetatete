const { connection, cloudinary } = require("../conf");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });
const passport = require("passport");

//Get all associations order by name
router.get("/", (req, res) => {
  connection.query(
    `SELECT * FROM association ORDER BY name ASC`,
    (err, associationResults) => {
      if (err)
        return res.status(500).send("Error in obtaining association's infos !");
      connection.query(
        "SELECT * FROM association_has_tag",
        (err, tagResults) => {
          if (err)
            return res
              .status(500)
              .send("Error in obtaining association's infos !");
          const newAssociationResults = JSON.parse(
            JSON.stringify(associationResults)
          );
          const newTagResults = JSON.parse(JSON.stringify(tagResults));
          newAssociationResults.map(association => {
            const tagList = newTagResults.filter(tag => {
              return tag.id_association == association.id;
            });
            const arrayTag = [];
            tagList.map(tag => {
              delete tag.id_association;
              const tempArrayTag = Object.values(tag);
              arrayTag.push(parseInt(tempArrayTag));
            });
            association.tagList = arrayTag;
          });
          return res.status(200).json(newAssociationResults);
        }
      );
    }
  );
});

//Get an association by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM association WHERE id = ?",
    [id],
    (err, associationResults) => {
      if (err)
        return res.status(500).send("Error in obtaining association's info !");
      if (associationResults.length === 0)
        return res
          .status(204)
          .send("There is no info corresponding to your research.");
      connection.query(
        "SELECT * FROM association_has_tag WHERE id_association = ?",
        [associationResults[0].id],
        (err, tagResults) => {
          if (err)
            return res
              .status(500)
              .send("Error in obtaining association's infos !");
          const newAssociationResults = JSON.parse(
            JSON.stringify(associationResults)
          );
          const newTagResults = JSON.parse(JSON.stringify(tagResults));
          const arrayTag = [];
          newTagResults.map(tag => {
            delete tag.id_association;
            const tempArrayTag = Object.values(tag);
            arrayTag.push(parseInt(tempArrayTag));
          });
          newAssociationResults[0].tagList = arrayTag;
          return res.status(200).json(newAssociationResults);
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

//Post a new association
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
        "INSERT INTO association SET ?",
        [req.body],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send(
                "Error has occured during the creation of the new association !"
              );
          const { insertId } = results;
          const tagData = id_tag.map(tag => {
            return [insertId, tag];
          });
          connection.query(
            "INSERT INTO association_has_tag (id_association, id_tag) VALUES ?",
            [tagData],
            (err, results) => {
              if (err)
                return res
                  .status(500)
                  .send(
                    "Error has occured during the attribution of the tag !"
                  );
              return res.status(201).send("Association created.");
            }
          );
        }
      );
    }
  );
});

//Modify an association by id
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
    "UPDATE association SET ? WHERE id = ?",
    [req.body, id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in modifying the association.");
      if (id_tag) {
        connection.query(
          "DELETE FROM association_has_tag WHERE id_association = ?",
          [id],
          (err, results) => {
            if (err)
              return res
                .status(500)
                .send("Error in modifying the association.");
            const tagData = id_tag.map(tag => {
              return [id, tag];
            });
            connection.query(
              "INSERT INTO association_has_tag (id_association, id_tag) VALUES ?",
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

//Delete an association by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    "DELETE FROM association_has_tag WHERE id_association = ?",
    [id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in deleting the association.");
      connection.query(
        "DELETE FROM association WHERE id = ?",
        [id],
        (err, results) => {
          if (err)
            return res.status(500).send("Error in deleting the association.");
          return res.sendStatus(200);
        }
      );
    }
  );
});
module.exports = router;
