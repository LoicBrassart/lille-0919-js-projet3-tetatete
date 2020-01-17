const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { port } = require("./conf");
const passport = require("passport");

//Routes imported
const ambassador = require("./routes/ambassador");
const association = require("./routes/association");
const campaign = require("./routes/campaign");
const auth = require("./routes/auth");
const donation = require("./routes/donation");
const misc = require("./routes/misc");

//Config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

//Router
app.use("/ambassador", ambassador);
app.use("/association", association);
app.use("/campaign", campaign);
app.use("/auth", auth);
app.use("/donation", donation);
app.use("/misc", misc);

app.listen(port, err => {
  if (err) {
    throw new Error(`Error !`);
  } else {
    console.log(`Server is listening to ${port}`);
  }
});
