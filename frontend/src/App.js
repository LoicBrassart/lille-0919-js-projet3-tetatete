import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CampaignsPage from "./pages/CampaignsPage"
import CampaignInfos from "./pages/CampaignInfos";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Footer from "./components/Footer";
import "./App.scss";

const { siteTitle } = require("./conf");


function App() {
  document.title = siteTitle;

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/campaigns/:id" component={CampaignInfos}></Route>
        <Route path="/campaigns" component={CampaignsPage}></Route>
        <Route path="/ambassadors/:id" component={AmbassadorInfos}></Route>
        <Route path="/ambassadors" component={Ambassadors}></Route>
        <Route path="/causes/:id" component={CauseInfos}></Route>
        <Route path="/causes" component={Causes}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
