require("dotenv").config();
let CONFIG = {};

CONFIG.siteTitle = process.env.REACT_APP_SITE_TITLE;

module.exports = CONFIG;
