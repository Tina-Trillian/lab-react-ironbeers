import React from "react";
import axios from "axios";

import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import AllBeers from "./AllBeers";
import New from "./New";
import Random from "./Random";
import NotFound from "./NotFound";
import Header from "./Header";

class Application extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Header />
          <Switch>
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/random" component={Random} />
            <Route exact path="/new-beer" component={New} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Application;
