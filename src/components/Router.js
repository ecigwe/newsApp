import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import OneNews from "./OneNews";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/OneNews/:id" component={OneNews} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
