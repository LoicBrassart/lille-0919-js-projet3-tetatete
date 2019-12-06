import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Meetings from "./pages/Meetings";
import Ambassadors from "./pages/Ambassadors";
import Causes from "./pages/Causes";
import Blog from "./pages/Blog";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

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
      </Switch>
    </div>
  );
}

export default App;
