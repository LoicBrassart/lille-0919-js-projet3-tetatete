import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import CampaignsPage from "./pages/CampaignsPage"
import CampaignInfos from "./pages/CampaignInfos";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Footer from "./components/Footer";
import HomeBO from "./pages/HomeBO";
import CampaignsPageBO from "./pages/CampaignsPageBO";
import AmbassadorsPageBO from "./pages/AmbassadorsPageBO";
import CausesPageBO from "./pages/CausesPageBO";
import CampaignPage from "./pages/CampaignPage";
import NavBarBO from "./components/NavBarBO";
import "./App.scss";

const { siteTitle } = require("./conf");


function App() {
  document.title = siteTitle;
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname.includes("admin") ? <NavBarBO /> : <NavBar />}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/campaigns/:id" component={CampaignInfos}></Route>
        <Route path="/campaigns" component={CampaignsPage}></Route>
        <Route path="/ambassadors/:id" component={AmbassadorInfos}></Route>
        <Route path="/ambassadors" component={Ambassadors}></Route>
        <Route path="/causes/:id" component={CauseInfos}></Route>
        <Route path="/causes" component={Causes}></Route>
        <Route path="/admin" component={HomeBO}></Route>
        <Route path="/admin/campaigns" component={CampaignsPageBO}></Route>
        <Route path="/admin/ambassadors" component={AmbassadorsPageBO}></Route>
        <Route path="/admin/causes" component={CausesPageBO}></Route>
      </Switch>
      {location.pathname.includes("admin") ? "" : <Footer />}
    </div>
  );
}

export default App;
