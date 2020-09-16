import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

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
// console.log(GET_TODOS);

function App() {
  const { data, loading } = useQuery(GET_TODOS);
  // console.log('dataprop:', data);

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(data.todos);
  return (
    <div>
      {!data ? (
        <div>No data</div>
      ) : (
        <ul>
          {data.todos.map((todo) => {
            return <li key={todo.id}>{todo.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
