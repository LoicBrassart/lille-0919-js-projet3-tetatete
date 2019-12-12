import React from "react";
import CausesList from "./pages/CausesList";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const { siteTitle } = require("./conf.js");

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/causeslist" component={CausesList} />
      </Switch>
    </div>
  );
}

export default App;
