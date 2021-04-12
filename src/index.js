// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./Homepage";
import Recordings from "./Recordings";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/recordings" component={Recordings} />
    </Switch>
  </Router>,
  rootElement
);
