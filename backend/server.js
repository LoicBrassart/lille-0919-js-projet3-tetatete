const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { port } = require("./conf");

//Routes imported
const ambassador = require("./routes/ambassador");
const association = require("./routes/association");
const campaign = require("./routes/campaign");
const auth = require("./routes/auth");
const misc = require("./routes/misc");

//Config
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Router
app.use("/ambassador", ambassador);
app.use("/association", association);
app.use("/campaign", campaign);
app.use("/auth", auth);
app.use("/misc", misc);

app.listen(port, err => {
  if (err) {
    throw new Error(`Error !`);
  } else {
    console.log(`Server is listening to ${port}`);
  }
});
