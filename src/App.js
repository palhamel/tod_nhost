import React from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag'

const GET_TODOS = gql`
  query {
    todos {
      id
      created_at
      name
      completed
    }
  }
`; 


function App() {

  const { data, loading } = useQuery(GET_TODOS);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
