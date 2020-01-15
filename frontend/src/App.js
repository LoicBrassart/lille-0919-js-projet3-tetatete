import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./App.scss";
import CampaignPage from "./pages/CampaignPage";
import FormAdmin from "./pages/FormAdmin";
const { siteTitle } = require("./conf.js");

function App() {
  document.title = siteTitle;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/campaign/:id" component={CampaignPage}></Route>
        <Route path="/campaigns" component={Meetings}></Route>
        <Route path="/ambassadors/:id" component={AmbassadorInfos}></Route>
        <Route path="/ambassadors" component={Ambassadors}></Route>
        <Route path="/causes/:id" component={CauseInfos}></Route>
        <Route path="/causes" component={Causes}></Route>
        <Route path="/admin" component={FormAdmin}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
