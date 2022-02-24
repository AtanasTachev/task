import './login.css'
import React, { useEffect, useState, useContext } from "react";
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../contexts/AuthContext';

const clientId = '415229235264-hodh11mdmqdi1dag1kiugrhnr7uv3sjf.apps.googleusercontent.com';
            

const LoginButton = () => {

  const { login } = useContext(AuthContext); 

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
      uxMode='redirect'
      redirectUri="http://localhost:3001/gallery"
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}


/>
    </div>
  )

  // return <button className="login__button"><a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">LOGIN</a></button>;
};

export default LoginButton;