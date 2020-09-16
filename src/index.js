import React from 'react';
import ReactDOM from 'react-dom';
import { NhostApolloProvider } from 'react-nhost'
import App from './App';
// import './index.css';
// const URL_Nhost = "https://hasura-wbfqe0lb.nhost.app/v1/graphql"

ReactDOM.render(
  <React.StrictMode>
    <NhostApolloProvider gqlEndpoint="https://hasura-wbfqe0lb.nhost.app/v1/graphql">
      <App />
    </NhostApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

