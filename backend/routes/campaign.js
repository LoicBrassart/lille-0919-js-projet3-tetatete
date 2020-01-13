const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all campaigns in progress order by their starting times
//Or all campaigns done order by their ending times
//Or all campaigns order by the most imminent campaign to finish
//You can define a limit too
router.get("/", (req, res) => {
    let sql = "SELECT * FROM campaign";
    let query = [];
    if (req.query.inProgress) {
        sql += " WHERE NOW() < time_end ORDER BY time_start DESC";
    }
    if (req.query.done) {
        sql += " WHERE NOW() > time_end ORDER BY time_end DESC";
    }
    if (req.query.finishing) {
        sql += " WHERE NOW() < time_end ORDER BY timediff(time_end,time_start) ASC"
    }
    if (req.query.limit) {
        sql += " LIMIT ?";
        query.push(Number(req.query.limit));
    }
    connection.query(sql, [query], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining campaigns's infos !");
        if (results.length === 0) return res.status(204).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
});

//Get number of in progress and complete campaign
router.get("/total", (req, res) => {
    let sql = "SELECT COUNT(*) AS total FROM campaign";
    if (req.query.inProgress) {
        sql += " WHERE NOW() < time_end"
    }
    if (req.query.done) {
        sql += " WHERE NOW() > time_end"
    }
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).send("Error in obtaining total campaign's number !");
        return res.status(200).json(results);
    })
});

//Get campaign by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM campaign WHERE id =?", [id], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining campaign's info !");
        if (results.length === 0) return res.status(204).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
});

//Post a new campaign
router.post("/new", (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO campaign SET ?", [data], (err, results) => {
        if (err) return res.status(500).send("Error has occured during the creation of the new campaign !");
        return res.sendStatus(201);
    })
});

module.exports = router;