import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CampaignsPage from "./pages/CampaignsPage";
import CampaignInfos from "./pages/CampaignInfos";
import Ambassadors from "./pages/Ambassadors";
import AmbassadorInfos from "./pages/AmbassadorInfos";
import Causes from "./pages/Causes";
import CauseInfos from "./pages/CauseInfos";
import Footer from "./components/Footer";
import HomeBO from "./pages/HomeBO";
import FormLoginBO from "./components/FormLoginBO";
import CampaignsPageBO from "./pages/CampaignsPageBO";
import AmbassadorsPageBO from "./pages/AmbassadorsPageBO";
import CausesPageBO from "./pages/CausesPageBO";
import UserPageBO from "./pages/UserPageBO";
import NavBarBO from "./components/NavBarBO";
import "./App.scss";

const { siteTitle } = require("./conf");

export default function App() {
  document.title = siteTitle;
  const location = useLocation();

  const isLogged = useSelector(state => state.isLogged);

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
        <Route path="/admin/login" component={FormLoginBO}></Route>

        {isLogged ? (
          <Route path="/admin" component={HomeBO} />
        ) : (
          <Redirect to="/admin/login" />
        )}

        {isLogged ? (
          <React.Fragment>
            <Route
              path="/admin/creator/campaigns"
              component={CampaignsPageBO}
            />
            <Route path="/admin/campaigns" component={CampaignsPageBO} />
          </React.Fragment>
        ) : (
          <Redirect to="/admin/login" />
        )}

        {isLogged ? (
          <React.Fragment>
            <Route
              path="/admin/creator/ambassadors"
              component={AmbassadorsPageBO}
            />
            <Route path="/admin/ambassadors" component={AmbassadorsPageBO} />
          </React.Fragment>
        ) : (
          <Redirect to="/admin/login" />
        )}

        {isLogged ? (
          <Route path="/admin/causes" component={CausesPageBO} />
        ) : (
          <Redirect to="/admin/login" />
        )}

        {isLogged ? (
          <Route path="/admin/user" component={UserPageBO} />
        ) : (
          <Redirect to="/admin/login" />
        )}
      </Switch>
      {location.pathname.includes("admin") ? "" : <Footer />}
    </div>
  );
}
