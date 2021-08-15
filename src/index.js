import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

//components
import { Login } from "./pages/login/login";
import { Home } from "./pages/home/home";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App>
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </App>
    </Provider>
  </>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
