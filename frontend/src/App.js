import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Ambassadors from "./pages/Ambassadors.jsx";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import CausePage from "./pages/CausePage";
import Footer from "./components/Footer";
import Campaign from './pages/Campaign';
import AmbassadorPage from "./pages/AmbassadorPage";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

const { siteTitle } = require("./conf.js");

document.title = siteTitle;

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meetings" component={Meetings} />
        <Route path="/ambassadors" component={Ambassadors} />
        <Route path="/causes" component={Causes} />
        <Route path="/blog" component={Blog} />
        <Route path="/campaign/:id" component={Campaign} />
        <Route path="/causepage" component={CausePage} />
        <Route path="/ambassadorpage" component={AmbassadorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
