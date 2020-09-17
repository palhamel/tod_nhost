import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import { auth } from "./util/nhost";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NhostAuthProvider, NhostApolloProvider } from "react-nhost";
import './index.css';
const URL_Nhost = "https://hasura-wbfqe0lb.nhost.app/v1/graphql";

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider auth={auth} gqlEndpoint={URL_Nhost}>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <App />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
