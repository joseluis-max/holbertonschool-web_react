import React from "react";
import './Login.css';

function Login() {
  return (
    <React.Fragment>
      <p>
        Login to access the full dashboard
      </p>

      <label htmlFor="email">email</label><br />
      <input type="email" id="email" name="email"></input><br />
      <br />

      <label htmlFor="password">password</label><br />
      <input type="password" id="password" name="password"></input><br />
      <br />

      <button>OK</button>
    </React.Fragment>
  );
}

export default Login;
