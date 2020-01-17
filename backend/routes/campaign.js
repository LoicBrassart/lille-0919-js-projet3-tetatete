const { connection, cloudinary } = require("../conf");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });

//Get all campaigns in progress order by their starting times
//Or all campaigns done order by their ending times
//Or all campaigns order by the most imminent campaign to finish
//You can define a limit too
router.get("/", (req, res) => {
  let sql =
    "SELECT *, timediff(time_end,NOW()) AS timeDiff, datediff(time_end,NOW()) AS dateDiff FROM campaign";
  let query = [];
  if (req.query.inProgress) {
    sql += " WHERE NOW() < time_end ORDER BY time_start DESC";
  } else if (req.query.done) {
    sql += " WHERE NOW() > time_end ORDER BY time_end DESC";
  } else if (req.query.finishing) {
    sql += " WHERE NOW() < time_end ORDER BY timediff(time_end,NOW()) ASC";
  }
  if (req.query.limit) {
    sql += " LIMIT ?";
    query.push(Number(req.query.limit));
  }
  connection.query(sql, [query], (err, results) => {
    if (err)
      return res.status(500).send("Error in obtaining campaigns's infos !");
    if (results.length === 0)
      return res
        .status(204)
        .send("There is no info corresponding to your research.");
    return res.status(200).json(results);
  });
});

//Get number of in progress and complete campaign
router.get("/total", (req, res) => {
  let sql = "SELECT COUNT(*) AS total FROM campaign";
  if (req.query.inProgress) {
    sql += " WHERE NOW() < time_end";
  }
  if (req.query.done) {
    sql += " WHERE NOW() > time_end";
  }
  connection.query(sql, (err, results) => {
    if (err)
      return res
        .status(500)
        .send("Error in obtaining total campaign's number !");
    return res.status(200).json(results);
  });
});

//Get campaign by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM campaign WHERE id =?",
    [id],
    (err, results) => {
      if (err)
        return res.status(500).send("Error in obtaining campaign's info !");
      if (results.length === 0)
        return res
          .status(204)
          .send("There is no info corresponding to your research.");
      return res.status(200).json(results);
    }
  );
});

//Post a new campaign
router.post("/", upload.single("img"), (req, res) => {
  cloudinary.v2.uploader.upload(
    req.file.path,
    { transformation: { width: 400, height: 300, crop: "fill" } },
    (err, result) => {
      if (err)
        return res
          .status(500)
          .send("Error has occured during the upload of the image !");
      const {
        name,
        resume,
        time_start,
        time_end,
        date_event,
        value1,
        value2,
        value3,
        id_user,
        id_ambassador,
        id_association
      } = req.body;
      const data = {
        name: name,
        img: result.url,
        resume: resume,
        time_start: time_start,
        time_end: time_end,
        date_event: date_event,
        value1: value1,
        value2: value2,
        value3: value3,
        id_user: id_user,
        id_ambassador: id_ambassador,
        id_association: id_association
      };
      connection.query("INSERT INTO campaign SET ?", [data], (err, results) => {
        if (err)
          return res
            .status(500)
            .send(
              "Error has occured during the creation of the new campaign !" +
                err
            );
        return res.sendStatus(201);
      });
    }
  );
});

//Modify a campaign by id
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  const data = req.body;
  connection.query(
    "UPDATE campaign SET ? WHERE id = ?",
    [data, id],
    (err, results) => {
      if (err) return res.status(500).send("Error in modifying the campaign.");
      return res.sendStatus(200);
    }
  );
});

//Delete a campaign by id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  connection.query(
    "DELETE FROM campaign WHERE id = ?",
    [id],
    (err, results) => {
      if (err) return res.status(500).send("Error in deleting the campaign.");
      return res.status(200);
    }
  );
});

module.exports = router;
