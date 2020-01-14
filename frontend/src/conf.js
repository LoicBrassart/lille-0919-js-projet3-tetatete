require("dotenv").config();
let CONFIG = {};

CONFIG.siteTitle = process.env.REACT_APP_SITE_TITLE;
CONFIG.apiCall = process.env.REACT_APP_API_CALL;

module.exports = CONFIG;
