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

module.exports = router;
