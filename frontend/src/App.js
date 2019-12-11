import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Ambassadors from "./pages/Ambassadors.jsx";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import CausePage from "./pages/CausePage";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Campaign from './pages/Campaign';
=======
import AmbassadorPage from "./pages/AmbassadorPage";
>>>>>>> 32ed425e2eea2fdaf447a5b57c4bd76039a6b08c
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
<<<<<<< HEAD
        <Route path="/campaign/:id" component={Campaign} />
=======
        <Route path="/causepage" component={CausePage} />
>>>>>>> 32ed425e2eea2fdaf447a5b57c4bd76039a6b08c
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
