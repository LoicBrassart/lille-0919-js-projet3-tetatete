const { connection } = require("../conf");
const express = require("express");
const router = express.Router();
const sendMail = require("sendmail")({ silent: true });

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
  //Check if there is already someone who donate with these infos
  connection.query(
    `SELECT user.phone_number, user.email FROM user 
      JOIN donation ON user.id=donation.user_id
      WHERE phone_number = ? AND email = ? AND donation.campaign_id = ?`,
    [phone_number, email, campaign_id],
    (err, results) => {
      if (err)
        return res
          .status(500)
          .send("Error has occured during the creation of the new user !");
      if (results.length)
        return res
          .status(409)
          .send("Somebody has already donate using these informations !");
      //Check if this user already donate to an another campaign
      connection.query(
        "SELECT id, phone_number, email FROM user WHERE phone_number = ? AND email = ?",
        [phone_number, email],
        (err, results) => {
          if (err)
            return res
              .status(500)
              .send("Error has occured during the creation of the new user !");
          //If no, create a new user and a new donation
          if (!results.length) {
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
                    res.status(201).send("Donation posted successfully !");
                    sendMail({
                      from: "Team.Meex@meex.com",
                      to: email,
                      replyTo: "team@meex.com",
                      subject: "Thank you for your donation !",
                      html: `Thank you! You just donated ${donation_value}€ and by doing this you participated to have a better world !`
                    });
                  }
                );
              }
            );
            //if yes, there is no need to create a new user
          } else {
            const { id, email } = results[0];
            const newDonation = {
              campaign_id: campaign_id,
              user_id: id,
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
                res.status(201).send("Donation posted successfully !");
                sendMail({
                  from: "Team.Meex@meex.com",
                  to: email,
                  replyTo: "team@meex.com",
                  subject: "Thank you for your donation !",
                  html: `Thank you! You just donated ${donation_value}€ and by doing this you participated to have a better world !`
                });
              }
            );
          }
        }
      );
    }
  );
});

module.exports = router;
