import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "util/nhost";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // handleSubmit as async func
  async function handleSubmit(e) {
    // stop default refreshing
    e.preventDefault();
    // login
    try {
      await auth.login(email, password);
    } catch (error) {
      alert("Houston - we have an error logging in");
      console.error(error);
      return;
    }
    // if no error redirect back - or "./"?
    history.push("/");
  }

  // build form;
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
    </div>
  );
}
