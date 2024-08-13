import { useState } from "react";
import { Context } from "../App";
import Profile from "./Profile";
import Login from "./Login";
import './Users.css';


export default function Users() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState(false);
  return (
    <div className="users">
      <h1>Context-Api</h1>
      <Context.Provider value={{ username, setUsername, profile, setProfile }}>
        {profile ? <Profile /> : <Login />}
      </Context.Provider>
    </div>

  );
}
