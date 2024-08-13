import React, { useContext } from "react";
import { Context } from "../App";
import './Profile.css';

function Profile() {
  const { username } = useContext(Context);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <h3>Username: {username}</h3>
    </div>
  );
}

export default Profile;
