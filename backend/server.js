const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const { port } = require('./conf');

const ambassador = require('./routes/ambassador');
const association = require('./routes/association');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/ambassador', ambassador);
app.use('/association', association);

app.listen(port, err => {
    if (err) {
        throw new Error(`Error !`);
    } else {
        console.log(`Server is listening to ${port}`);
    }
});