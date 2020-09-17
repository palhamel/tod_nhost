import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./util/nhost";
import { NhostAuthProvider, NhostApolloProvider } from "react-nhost";
// import './index.css';
const URL_Nhost = "https://hasura-wbfqe0lb.nhost.app/v1/graphql";

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider auth={auth} gqlEndpoint={URL_Nhost}>
        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
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
