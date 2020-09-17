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
      alert("error logging in");
      console.error(error)
      return;
    }
    // if no error redirect back
    history.push("/");
  }



  // form
  return (

  )
}
