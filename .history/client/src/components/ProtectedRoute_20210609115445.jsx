import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { Login } from './Login-employer';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return Login() ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
}

// export default ProtectedRoute