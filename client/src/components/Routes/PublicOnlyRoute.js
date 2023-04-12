import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PublicOnlyRoute = props => {
  const {user, isLoading } = useSelector(state => state.auth);
  console.log(user);
  if(isLoading) {
    return <div>LOADING ...</div>;
  }
  // if(!user) {
    return <Route {...props} />;
  // }
  // return < Redirect to='/'/>; 
 
}

export default PublicOnlyRoute;
