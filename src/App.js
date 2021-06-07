import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComponent from "./components/Nav";
import Users from "./components/Users";
import User from "./components/User";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <div className="container-components">
          <Switch>
            <Route exact path="/">
              <Users />
            </Route>
            <Route path="/user/:userName" {...this.props}>
              <User />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
