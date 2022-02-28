import './login.css'
import React, { useEffect, useState, useContext } from "react";
import { GoogleLogin } from 'react-google-login';
// import ls from 'local-storage';
// import { AuthContext } from '../../contexts/AuthContext';
// import * as userService from '../../services/userService'
           

const LoginButton = () => {
  
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null
  );

  const handleFailure = (result) => {
    alert(result);
  };

  const handleLogin = async (googleData) => {
    const res = await fetch('/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };
  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };
  
  // const onSuccess = async(res) => {
  //   console.log('[Login Success] currentUser:', res.profileObj);
  //   await setUser(res.profileObj.name);
  // };
  
  // // console.log(user);
    

  // const onFailure = (res) => {
  //   console.log('[Login Failure] res:' , res);
  // } 

  return (
    <div className="login__button">
      <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText={'Login'}
      onSuccess={handleLogin}
      onFailure={handleFailure}
      uxMode='redirect'
      redirectUri="http://localhost:3000/gallery"
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}

/>
    </div>
  )

  // return <button className="login__button"><a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">LOGIN</a></button>;
};

export default LoginButton;

