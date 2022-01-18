import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './Error';
// var isValid = false;
// var isNewUser = false;
// var userRole = -1;


const PrivateRoute = (props) => {
  const [isValid, setIsValid] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  let a, b;
  
  useEffect( async () => {    
    isTokenValid().then(res => {
      [a, b] = res;
      return [a, b]
    }).then(data => {
      console.log(data);
      setIsValid(data[0]);
      setIsNewUser(data[1]);
    })
    console.log(a, b);

    
   
    // console.log(isTokenValid());
    
  }, [a, b])


  const isTokenValid = async () => {
    const token = sessionStorage.getItem('tokenID');
    // try {
    //   const res = await fetch('/api/verify-token', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       token: token
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   });
    //   const data = await res.json();
    //   userRole = data;
    //   // data has message : 'success' if valid and 'invalid' else
    //   // on valid, data also has user.email, user.name, user.isNewUser, user.role
    //   if (data.message === 'success') {
    //     isValid = true;
    //     isNewUser = data.user.isNewUser;
    //     userRole = data.user.role;
    //   }
    // } catch {
    //   console.log('Error with authentication, login again');
    // }
    let blah = true;
    return [true, blah];



  };

  // Show the component only when the user is logged in
  // Otherwise, redirect the user to /signin page

  // if (props.path === '/register' && isValid && isNewUser) {
  //   return <Route path={props.path} component={propsprops.component} />;
  // } else if (props.path === '/register' && isValid && !isNewUser) {
  //   window.location.href = '/dashboard';
  // } else if (props.path === '/dashboard' && isValid && !isNewUser) {
  //   return <Route path={props.path} component={props.component} />;
  // } else {
  //   sessionStorage.clear();
  //   // console.log({ isValid, isNewUser, userRole });
  //   window.location.href = '/authentication';
  // }
  if (props.path=="/register"){
    return <Route path={props.path} component={isNewUser && isValid ? props.component : Error}></Route>
  } else if (props.path=="/dashboard"){
    return <Route path={props.path} component={!isNewUser && isValid ? props.component : Error}></Route>    
  }

  // return null;
};

export default PrivateRoute;
