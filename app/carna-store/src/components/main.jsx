import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Banner from "./banner";
import Products from "./products";
import Product from "./product";

class Main extends Component {
  state = {};

  render() {
    return (
      <main>
        <Switch>
          <Route path="/view" component={Banner} />
          <Route path="/product/:id" component={Product} />
          <Redirect from="/" exact to="/view" />
        </Switch>
        <Products />
      </main>
    );
  }
}

export default Main;
