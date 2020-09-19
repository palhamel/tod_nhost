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
    <div className="ui segment">
      <h2>Please login to access your data</h2>
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
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

        </div>
        <button className="ui button purple">Login</button>
      </form>
      <div className="badge">
        <div className="ui right floated small segment">
          <p><i className="angle right icon"></i>Built with <a href="https://nhost.io/" target="_blank" rel="noopener noreferrer">Nhost</a><span role="img" aria-label="image of hand">  👋🏻</span> </p>
        </div>
      </div>
    </div>
    
  );
}
