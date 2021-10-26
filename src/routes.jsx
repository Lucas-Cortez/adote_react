import React from "react";
import HomePage from "./pages/homePage";
import AcepptedPage from "./pages/acepptedPage";
import RecusePage from "./pages/recusePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/aceito" exact component={AcepptedPage} />
        <Route path="/recusado" exact component={RecusePage} />
      </Switch>
    </Router>
  );
}

export default Routes;
