import React from "react";

import { render } from "react-dom";
import { Link } from "react-router";
// Import css
import css from "./styles/style.styl";

// Import Components
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

// import react router deps
import { Route, IndexRoute, browserHistory, Switch } from "react-router";
import { Provider } from "react-redux";
import store, { history } from "./store";
import { BrowserRouter, Router } from "react-router-dom";

const router = (
  <BrowserRouter>
    <Router history={history}>
      <Provider store={store}>
        <div>
          <Main />
          <Switch>
            <Route exact path="/" component={PhotoGrid} />
            <Route path="/view/:code" component={Single} />
          </Switch>
        </div>
      </Provider>
    </Router>
  </BrowserRouter>
);

render(router, document.getElementById("root"));
