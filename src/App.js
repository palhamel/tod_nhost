import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import gql from "graphql-tag";

// Get data:
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

// Add data:
const INSERT_TODO = gql`
  mutation($todo: todos_insert_input!) {
    insert_todos(objects: [$todo]) {
      affected_rows
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_TODOS);
  // console.log('dataprop:', data);
  const [insertTodo] = useMutation(INSERT_TODO);
  const [todoName, setTodoName] = useState("");

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

      <form 
        onSubmit={async (e) => {
          e.preventDefault();

          try {
            await insertTodo({
              variables: {
                todo: {
                  name: todoName,
                },
              },
            });
          } catch (error) {
            alert("Error creating todo");
            console.log(error);
          }
          alert("todo created");
          setTodoName("");
        }}
      >
        <input 
          type="text" 
          placeholder="todo" 
          value={todoName} 
          onChange={ (e) => setTodoName(e.target.value)}
        />

      </form>

    </div>
  );
};

export default App;
