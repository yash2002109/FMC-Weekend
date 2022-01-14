import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const isTokenValid = () => {
    let isValid = false;
    let isNewUser = false;
    const token = sessionStorage.getItem('tokenID');
    try {
      //   const res = await fetch('/api/google-login', {
      //     method: 'POST',
      //     body: JSON.stringify({
      //       token: token
      //     }),
      //     headers: {
      //       'Content-Type': 'application/json'
      //     }
      //   });
      //   const data = await res.json();
      //   console.log(data);

      //   isNewUser = data.user.newUser;

      // set the state whether the token is valid or not and return that
      isValid = true; // testing purpose
      isNewUser = true;
    } catch {
      alert('Error while Logging In');
    }
    return [isValid, isNewUser];
  };

  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page
  if (props.path === '/register' && isTokenValid()[0] && isTokenValid()[1]) {
    return <Route path={props.path} component={props.component} />;
  } else if (props.path === '/dashboard' && isTokenValid()[0] && !isTokenValid()[1]) {
    return <Route path={props.path} component={props.component} />;
  } else {
    window.location.href = '/authentication';
  }

};

export default PrivateRoute;
