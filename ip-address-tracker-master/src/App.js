import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from "./components/form";
import { Header } from "./components/Header/Header";
import Home from "./components/home";
import { MapStructer } from "./components/Map/MapStructer";
import Nav from "./components/Nav";

import axios from "./services/index";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/create" component={Form} />
        </Switch>
      </Router>
    );
  }
}

export { App };
