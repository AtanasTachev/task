import './login.css'
import React from "react";
import { GoogleLogin } from 'react-google-login';
const clientId = '415229235264-luri6la7g3qnf2ii89jj2limf6g52n9m.apps.googleusercontent.com';


const LoginButton = () => {
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login Failure] res:' , res);
  } 

  return (
    <div className="login__button">
      <GoogleLogin
      clientId={clientId}
      buttonText={'Login'}
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}


/>
    </div>
  )

  // return <button className="login__button"><a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">LOGIN</a></button>;
};

export default LoginButton;