import React from "react";
import "./App.scss";

const { siteTitle } = require("./conf.js");

function App() {

  document.title = siteTitle;

  return <div className="App"></div>;
}

export default App;
