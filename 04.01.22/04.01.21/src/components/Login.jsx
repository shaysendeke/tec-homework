import { useState } from "react";
import apiKey from './apiKey'
import axios from "axios";
import "./register.css"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorFromServer, setErrorFromServer] = useState("");

  function register() {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
    axios
      .post(url, {
        email,
        password,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        setErrorFromServer(error);
        console.log(error);
      });
  }

  return (
    <form style={{textalign:"center"}}
      onSubmit={(e) => {
        e.preventDefault();
        register();
      }}
    >
      <label>Email | </label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <br /><br/>
      <label>Password | </label>
      <input onChange={(e) => setPassword(e.target.value)} />
      <br /><br/>
      <input type="submit" value="Register" />
      <p style={{ color: "red" }}>
        {errorFromServer ? "error form server " : ""}
      </p>
    </form>
  );
};

export default Register;