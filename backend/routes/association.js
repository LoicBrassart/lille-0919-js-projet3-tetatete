const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all associations order by name and with filter
router.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM association ORDER BY name ASC",
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send("Error in obtaining associations's infos !");
      return res.status(200).json(results);
    }
  );
});

//Get an association by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM association WHERE id = ?",
    [id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in obtaining association's info !");
      if (results.length === 0)
        return res
          .status(204)
          .send("There is no info corresponding to your research.");
      return res.status(200).json(results);
    }
  );
});

//Post a new association
router.post("/", (req, res) => {
  const { name, img, resume, website } = req.body;
  const formData = {
    name: name,
    img: img,
    resume: resume,
    website: website
  };
  connection.query(
    "INSERT INTO association SET ?",
    [formData],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send(
            "Error has occured during the creation of the new association !"
          );
      const { insertId } = results;
      const { id_tag } = req.body;
      const associationData = id_tag.map(tag => {
        return [insertId, tag];
      });
      connection.query(
        "INSERT INTO association_has_tag (id_association, id_tag) VALUES ?",
        [associationData],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send("Error has occured during the attribution of the tag !");
          return res.status(201).send("Association created.");
        }
      );
    }
  );
});

//Modify an association by id
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  connection.query(
    "UPDATE association SET ? WHERE id = ?",
    [data, id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in modifying the association.");
      return res.sendStatus(200);
    }
  );
});

//Delete an association by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    "DELETE FROM association WHERE id = ?",
    [id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in deleting the association.");
      return res.status(200);
    }
  );
});

module.exports = router;