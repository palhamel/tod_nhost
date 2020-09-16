import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { auth } from './util/nhost'
import { NhostAuthProvider, NhostApolloProvider} from "react-nhost";


// import './index.css';
// const URL_Nhost = "https://hasura-wbfqe0lb.nhost.app/v1/graphql"

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider auth={auth} gqlEndpoint="https://hasura-wbfqe0lb.nhost.app/v1/graphql">
        <App />
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
