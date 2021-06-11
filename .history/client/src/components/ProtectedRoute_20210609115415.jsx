import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LOgin } from './Login-employer';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return LOgin() ? (
    <Route {...rest} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
}

// export default ProtectedRoute