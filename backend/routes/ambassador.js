const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all ambassadors order by name and with filter
router.get("/", (req, res) => {
    let sql = "SELECT * FROM ambassador ORDER BY firstname ASC";
    let filter = [];
    if (req.query.filter) {
        sql = `SELECT * FROM ambassador 
                JOIN ambassador_has_tag ON ambassador.id = ambassador_has_tag.id_ambassador
                WHERE id_tag = ?
                ORDER BY firstname ASC`;
        filter.push(req.query.filter);
    }
    connection.query(sql, [filter], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining ambassadors's infos !");
        if (results.length === 0) return res.status(500).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
});

//Get ambassador by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM ambassador WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining ambassador's info !");
        if (results.length === 0) return res.status(500).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
});

//Post a new ambassador
router.post("/new", (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO ambassador SET ?", [data], (err, results) => {
        if (err) return res.status(500).send("Error has occured during the creation of the new ambassador !");
        return res.sendStatus(200);
    })
})

module.exports = router;