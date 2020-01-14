const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all associations
router.get("/", (req, res) => {
  connection.query("SELECT * FROM association", (err, results) => {
    if (err) {
      res.status(500).send("Error !");
    } else {
      res.status(200).json(results);
    }
  });
});

//Get specific association
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM association WHERE id=?",
    [id],
    (err, results) => {
      if (err) {
        res.status(500).send("Error !");
      } else {
        res.status(200).json(results);
      }
    }
  );
});

module.exports = router;
