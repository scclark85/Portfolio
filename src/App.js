import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Resume from "./pages/resume"



class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/resume" component={Resume} />
      </Router>
    );
  }
}

export default App;
