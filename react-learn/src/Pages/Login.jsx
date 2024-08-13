import React, { useContext } from "react";
import { Context } from "../App";
import './Login.css';

function Login() {
  const { setUsername, setProfile } = useContext(Context);

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="password" />
      <button onClick={() => setProfile(true)}>Login</button>
    </div>
  );
}

export default Login;
