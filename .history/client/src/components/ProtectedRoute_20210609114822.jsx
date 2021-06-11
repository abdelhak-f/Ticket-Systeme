import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { isAuthenticated } from './Login-employer';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return isAuthenticated() ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
}

export default ProtectedRoute