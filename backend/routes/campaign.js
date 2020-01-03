const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all campaigns
router.get("/all", (req, res) => {
    connection.query("SELECT * FROM campaign", (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

module.exports = router;