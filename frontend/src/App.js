import React from "react";
import NavBar from "./components/NavBar";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Footer from "./components/Footer";
import HomeBO from "./pages/HomeBO";
import "./App.scss";
import CampaignPage from "./pages/CampaignPage";
import NavBarBO from "./components/NavBarBO";

const { siteTitle } = require("./conf");

function App() {
  document.title = siteTitle;
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/admin" ||
      location.pathname === "/campaignsBO" ||
      location.pathname === "/ambassadorsBO" ||
      location.pathname === "/causesBO" ? (
        <NavBarBO />
      ) : (
        <NavBar />
      )}
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/campaign/:id" component={CampaignPage}></Route>
        <Route path="/ambassadors/:id" component={AmbassadorInfos}></Route>
        <Route path="/ambassadors" component={Ambassadors}></Route>
        <Route path="/causes/:id" component={CauseInfos}></Route>
        <Route path="/causes" component={Causes}></Route>
        <Route path="/admin" component={HomeBO}></Route>
      </Switch>
      {location.pathname === "/admin" ||
      location.pathname === "/campaignsBO" ||
      location.pathname === "/ambassadorsBO" ||
      location.pathname === "/causesBO" ? (
        ""
      ) : (
        <Footer />
      )}
    </div>
  );
}

export default App;
