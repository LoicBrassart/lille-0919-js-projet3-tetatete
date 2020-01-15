const { connection } = require("../conf");
const express = require("express");
const router = express.Router();

//Get total of donation of all campaign and total of all association
router.get("/total", (req, res) => {
  connection.query(
    "SELECT SUM(donation_value)  AS totalDonation from donation",
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send("Error in obtaining summary of all campaign's donation !");
      const { totalDonation } = results[0];
      connection.query(
        "SELECT count(association.id) AS nbAssociation from association",
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send("Error in obtaining summary of all campaign's donation !");
          const { nb_asso } = results[0];
          const finalResult = { totalDonation, nb_asso };
          return res.status(200).json(finalResult);
        }
      );
    }
  );
});

//Post a donation from a new user
router.post("/", (req, res) => {
  const { phone_number, email, campaign_id, donation_value, date } = req.body;
  const newUser = {
    phone_number: phone_number,
    email: email
  };
  connection.query(
    "SELECT phone_number FROM user WHERE phone_number = ?",
    [phone_number],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send("Error has occured during the creation of the new user !");
      if (results.length)
        return res.status(409).send("Phone number already taken !");
      connection.query(
        "SELECT email FROM user WHERE email = ?",
        [email],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send("Error has occured during the creation of the new user !");
          if (results.length)
            return res.status(409).send("Email address already taken !");
          connection.query(
            "INSERT INTO user SET ?",
            [newUser],
            (err, results) => {
              if (err)
                return res
                  .status(500)
                  .send(
                    "Error has occured during the creation of the new user !"
                  );
              const { insertId } = results;
              const newDonation = {
                campaign_id: campaign_id,
                user_id: insertId,
                donation_value: donation_value,
                date: date
              };
              connection.query(
                "INSERT INTO donation SET ?",
                [newDonation],
                (err, results) => {
                  if (err)
                    return res
                      .status(500)
                      .send(
                        "Error has occured during the post of the new donation !"
                      );
                  return res.status(201).send("Donation posted successfully !");
                }
              );
            }
          );
        }
      );
    }
  );
});

module.exports = router;
