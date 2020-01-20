import React from "react";
import { Switch, Route } from "react-router-dom";
import CampaignsPageBO from "./CampaignsPageBO";
import AmbassadorsPageBO from "./AmbassadorsPageBO";
import CausesPageBO from "./CausesPageBO";
import "./styles/HomeBO.scss";

export default function HomeBO() {
  return (
    <div className="HomeBO">
      <Switch>
        <Route exact path="/campaignsBO" component={CampaignsPageBO}></Route>
        <Route path="/ambassadorsBO" component={AmbassadorsPageBO}></Route>
        <Route path="/causesBO" component={CausesPageBO}></Route>
      </Switch>
    </div>
  );
}
