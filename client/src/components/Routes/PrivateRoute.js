import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = props => {
  const { user, isLoading } = useSelector(state => state.auth);

  if (isLoading) {
    return <div>LOADING ...</div>;
  }

  if (user) {
    return <Route {...props} />;
  }

  return <Redirect to='/' />;
};

export default PrivateRoute;