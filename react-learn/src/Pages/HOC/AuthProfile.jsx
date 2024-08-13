import React from 'react';
import Authentication from './Authentication';

const AuthProfile = () => {
  return (
    <div>
      <h2>AuthProfile</h2>
      <h3>User Authenticated</h3>
    </div>
  );
};

// Wrap AuthProfile with the Authentication HOC.
export default Authentication(AuthProfile);
