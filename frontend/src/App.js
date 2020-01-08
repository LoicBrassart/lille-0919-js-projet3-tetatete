import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.scss";
const { siteTitle } = require("./conf.js");

function App() {
  document.title = siteTitle;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/meetings" component={Meetings}></Route>
        <Route exact path="/ambassadors" component={Ambassadors}></Route>
        <Route
          exact
          path="/ambassadors/:id"
          component={AmbassadorInfos}
        ></Route>
        <Route exact path="/causes" component={Causes}></Route>
        <Route exact path="/blog" component={Blog}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
