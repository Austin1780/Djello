import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Jumbotron } from "reactstrap";

import MainNavBar from "./MainNavBar";
import ScrollToTop from "./ScrollToTop";
import img404 from "../404.png";

const App = () => (
  <Router>
    <ScrollToTop>
      <MainNavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Jumbotron className="welcome-panel">
                <h1 className="display-5">Welcome to Djello!</h1>
                <hr className="my-2" />
                <p>Create a new board to begin.</p>
              </Jumbotron>
            </div>
          )}
        />
        <Route render={() => <img src={img404} alt="404 page not found" />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
