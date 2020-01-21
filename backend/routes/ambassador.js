const { connection, cloudinary } = require("../conf");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });

//Get all ambassadors order by name and with filter
router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM ambassador ORDER BY firstname ASC",
    (err, results) => {
      if (err)
        return res.status(500).send("Error in obtaining ambassadors's infos !");
      return res.status(200).json(results);
    }
  );
});

//Get an ambassador by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM ambassador WHERE id = ?",
    [id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in obtaining ambassador's info !");
      if (results.length === 0)
        return res
          .status(204)
          .send("There is no info corresponding to your research.");
      return res.status(200).json(results);
    }
  );
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
      const { firstname, lastname, resume } = req.body;
      const formData = {
        firstname: firstname,
        lastname: lastname,
        resume: resume,
        img: result.url
      };
      connection.query(
        "INSERT INTO ambassador SET ?",
        [formData],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send(
                "Error has occured during the creation of the new ambassador !"
              );
          const { insertId } = results;
          const { id_tag } = req.body;
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
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  connection.query(
    "UPDATE ambassador SET ? WHERE id = ?",
    [data, id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in modifying the ambassador.");
      return res.sendStatus(200);
    }
  );
});

//Delete an ambassador by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    "DELETE FROM ambassador WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).send("Error in deleting the ambassador.");
      return res.status(200);
    }
  );
});

module.exports = router;
