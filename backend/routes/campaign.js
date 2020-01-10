const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all campaigns
router.get("/", (req, res) => {
    connection.query("SELECT * FROM campaign", (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

//Get campaign by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM campaign WHERE id =?", [id], (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

module.exports = router;