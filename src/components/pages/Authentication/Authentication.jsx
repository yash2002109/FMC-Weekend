import { useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../../store/auth-context';
import Classes from './Authentication.module.css';

function Authentication() {
  const authCtx = useContext(AuthContext);

  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  );
  const [IsnewUser, setIsNewUser] = useState(true);

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
    const profile = googleData.profileObj;
    const email = googleData.profileObj.email;
    const name = googleData.profileObj.name;  
    authCtx.updateName(name);
    authCtx.updateEmail(email);  
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // send request to backend api and check if the user already exists or is a new one

    // const res = await fetch('/api/google-login', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     token: googleData.tokenId
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const data = await res.json();
    // 
    // Check if the user with email is new then redirect user to form to fill further credentials //setNewUser = true
    // authCtx.updateIsNewUser(true);
    // console.log(authCtx);
    // update localstorage with user type participant/campusAmbassador/institute
    const isNewUser = true;
    localStorage.setItem("isNewUser", false);
    if (isNewUser){        
         window.location.href = "/register";         
    } else {
        // send request to backend to see if user is a valid and credentials exist
        // if return code is 200 then set token
        // authCtx.updateToken(token); // or setIsLoggedIn to be true
        // authCtx.updateUserType = "participant" or "institute" if the email has @itbhu.ac.in or "campusAmbassador"        
        localStorage.setItem("userType", "institute");
        window.location.href = "/dashboard";
    }


    // else if user already exists => res.status_code = 200 then fetch complete information from backend api and proceed directly to dashboard //setNewUser = false

    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = (loginData) => {
    localStorage.removeItem('loginData');
  };
  return (
    <div className={Classes.auth_section}>
      {/* <h1>Hello World!</h1> */}
      {loginData ? (
        <div>
          <h3>You are logged in as {loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div ClassName={Classes.authenticateButton}>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log in with Google"
            onSuccess={handleLogin}
            onFailure={handleFailure}
            cookiePolicy="single_host_origin"></GoogleLogin>
        </div>
      )}
      
    </div>
   
  );
}

export default Authentication;
