const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all associations order by name and with filter
router.get("/", (req, res) => {
    let sql = "SELECT * FROM association ORDER BY name ASC";
    let filter = [];
    if (req.query.filter) {
        sql = `SELECT * FROM association 
                JOIN association_has_tag ON association.id = association_has_tag.id_association
                WHERE id_tag = ?
                ORDER BY name ASC`;
        filter.push(Number(req.query.filter));
    }
    connection.query(sql, [filter], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining associations's infos !");
        if (results.length === 0) return res.status(204).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
})

//Get association by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM association WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).send("Error in obtaining association's info !");
        if (results.length === 0) return res.status(204).send("There is no info corresponding to your research.");
        return res.status(200).json(results);
    })
});

//Post a new association
router.post("/new", (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO association SET ?", [data], (err, results) => {
        if (err) return res.status(500).send("Error has occured during the creation of the new association !");
        return res.sendStatus(201);
    })
})

module.exports = router;