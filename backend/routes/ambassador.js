const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all the ambassadors
router.get("/all", (req, res) => {
    connection.query("SELECT * FROM ambassador", (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

module.exports = router;