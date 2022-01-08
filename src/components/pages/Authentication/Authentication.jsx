import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import "./Authentication.css";

function Authentication() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData') ? JSON.parse(localStorage.getItem('loginData')) : null
  );
  const [IsnewUser, setIsNewUser] = useState(true);

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    console.log(googleData);
    profile = googleData.profileObj;
    const email = googleData.profileObj.email;
    const name = googleData.profileObj.name;
    console.log(email);
    console.log(name);
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);


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


    // Check if the user with email is new then redirect user to form to fill further credentials //setNewUser = true
    

    // } {

    // }


    // else if user already exists => res.status_code = 200 then fetch complete information from backend api and proceed directly to dashboard //setNewUser = false


    // setLoginData(data);
    // localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = (loginData) => {
    localStorage.removeItem('loginData');
  };
  return (
    <div class="auth-section">
      {/* <h1>Hello World!</h1> */}
      {loginData ? (
        <div>
          <h3>You are logged in as {loginData.email}</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Log in with Google"
          onSuccess={handleLogin}
          onFailure={handleFailure}
          cookiePolicy="single_host_origin"></GoogleLogin>
      )}
    </div>
  );
}

export default Authentication;
