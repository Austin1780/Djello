import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import MainNavBar from "./MainNavBar";
import BoardContainer from "../containers/BoardContainer";
import ScrollToTop from "./ScrollToTop";
import img404 from "../images/404.png";

const App = () => (
  <Router>
    <ScrollToTop>
      <MainNavBar />
      <Switch>
        <Route exact path="/" component={BoardContainer} />
        <Route
          render={() => (
            <img src={img404} alt="404 page not found" className="center" />
          )}
        />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
