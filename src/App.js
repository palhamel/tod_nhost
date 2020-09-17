import React, { useState } from "react";
import { useSubscription, useMutation } from "@apollo/client";
import gql from "graphql-tag";
// route and auth
import { Link } from "react-router-dom";
import { auth } from "./util/nhost";

// Get data:
const GET_TODOS = gql`
  subscription {
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
  const { data, loading } = useSubscription(GET_TODOS);
  // console.log(data);
  const [insertTodo] = useMutation(INSERT_TODO);
  const [todoName, setTodoName] = useState("");

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log(data.todos);
  return (
    <div className="ui segment">
      <div className="ui tiny buttons">
        <Link to="/login" className="ui disabled button purple">Login</Link>
        <span className="ui basic button purple" onClick={() => auth.logout()}> Logout </span>
      </div>

      {!data ? (
        <div>No data</div>
      ) : (
        <div className="ui bulleted list">
          <ul >
            {data.todos.map((todo) => {
              return <li key={todo.id}><h3 className="list-text">{todo.name}</h3></li>;
            })}
          </ul>

        </div>
      )}

      <form
        className="ui form"
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
          // alert("todo created");
          setTodoName("");
        }}
      >
        <div className="field">
          <input
            type="text"
            placeholder="What todo.."
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <button className="ui button purple">Add todo</button>
      </form>
    </div>
  );
}

export default App;
