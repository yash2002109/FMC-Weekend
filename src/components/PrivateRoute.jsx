import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isTokenValid = async () => {
    let isValid = false;
    let isNewUser = false;
    let userRole = -1;
    const token = sessionStorage.getItem('tokenID');
    try {
      const res = await fetch('/api/verify-token', {
        method: 'POST',
        body: JSON.stringify({
          token: token,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      userRole = data;
      // data has message : 'success' if valid and 'invalid' else
      // on valid, data also has user.email, user.name, user.isNewUser, user.role
      if (data.message === 'success') {
        isValid = true;
        isNewUser = data.user.isNewUser;
        userRole = data.user.role;
      }
    } catch {
      console.log('Error with authentication, login again');
    }

    return { isValid, isNewUser, userRole };
  };

  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  isTokenValid().then((obj)=>{
    const { isValid, isNewUser, userRole } = obj;
    if (props.path === '/register' && isValid && isNewUser) {
      return <Route path={props.path} component={props.component} />;
    } else if (props.path === '/dashboard' && isValid && !isNewUser) {
      return <Route path={props.path} component={props.component} />;
    } else {
      sessionStorage.clear();
      // console.log({ isValid, isNewUser, userRole });
      window.location.href = '/authentication';
    }
  });
  return null;
};

export default PrivateRoute;
