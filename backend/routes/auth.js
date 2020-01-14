const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { connection, JWTSecret } = require("../conf");
const passport = require("passport");
require("../strategyPassport");

router.post("/", (req, res) => {
  const formData = req.body;
  connection.query(
    "SELECT email FROM user WHERE email = ?",
    [formData.email],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send("Error har occured during the user creation !");
      if (results.length)
        return res.status(409).send("Email address already taken !");
      connection.query("INSERT INTO user SET ?", [formData], (err, results) => {
        if (err)
          return res
            .status(500)
            .send("Error har occured during the user creation !");
        return res.sendStatus(200);
      });
    }
  );
});

router.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err)
      return res.status(500).send("Error has occured during the connection !");
    if (!user) return res.status(401).send(info);
    const token = jwt.sign(JSON.parse(JSON.stringify(user[0])), JWTSecret);
    return res.status(200).json({ user, token });
  })(req, res);
});

module.exports = router;
