const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const data = req.body;
  connection.query("INSERT INTO user SET ?", [data], (err, results) => {
    if (err)
      return res
        .status(500)
        .send("Error has occured during the creation of the new user !");
    return res.sendStatus(200);
  });
});

module.exports = router;
