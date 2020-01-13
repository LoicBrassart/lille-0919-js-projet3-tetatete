const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get total of donation of all campaign
router.get("/total", (req, res) => {
    connection.query("SELECT SUM(donation_value) AS total FROM donation", (err, results) => {
        if (err) return res.status(500).send("Error in obtaining summary of all campaign's donation !");
        return res.status(200).json(results);
    })
})

module.exports = router;