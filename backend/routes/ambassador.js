const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get all ambassadors order by name
router.get("/", (req, res) => {
    connection.query("SELECT * FROM ambassador ORDER BY name ASC", (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

//Get ambassador by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    connection.query("SELECT * FROM ambassador WHERE id = ?", [id], (err, results) => {
        if (err) {
            res.status(500).send("Error !");
        } else {
            res.status(200).json(results);
        }
    })
});

//Post a new ambassador
router.post("/new", (req, res) => {
    const data = req.body;
    connection.query("INSERT INTO ambassador SET ?", [data], (err, results) => {
        if (err) return res.status(500).send("Error !");
        return res.sendStatus(200);
    })
})

module.exports = router;