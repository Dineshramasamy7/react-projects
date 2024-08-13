import React, { createContext, useState } from 'react';
import AuthProfile from './AuthProfile';

// Create the AuthContext with a default value of false.
export const AuthContext = createContext(false);

const Higher = () => {
  // Use useState to manage the authentication state.
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <div>
        <h1>Higher</h1>
        {/* Toggle the authentication state when the button is clicked. */}
        <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
        {/* Render the AuthProfile component */}
        <AuthProfile />
      </div>
    </AuthContext.Provider>
  );
};

export default Higher;
