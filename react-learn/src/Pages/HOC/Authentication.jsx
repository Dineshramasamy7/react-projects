import React, { useContext } from 'react';
import { AuthContext } from './Higher';

const Authentication = (Component) => {
  const WrappedComponent = (props) => {
    const isAuthenticated = useContext(AuthContext);
    if (!isAuthenticated) {
      return <div>User Not Authenticated</div>;
    }
    return <Component {...props} />;
  };
  return WrappedComponent;
};
export default Authentication;
