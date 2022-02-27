import './login.css'
import React, { useEffect, useState, useContext } from "react";
import { GoogleLogin } from 'react-google-login';
import { AuthContext } from '../../contexts/AuthContext';
import * as userService from '../../services/userService'

const clientId = '415229235264-hodh11mdmqdi1dag1kiugrhnr7uv3sjf.apps.googleusercontent.com';
            

const LoginButton = () => {

  const { login } = useContext(AuthContext); 

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
      userService.saveUser({
      email: res.profileObj.email,
      familyName: res.profileObj.familyName,
      givenName: res.profileObj.givenName,
      googleId: res.profileObj.googleId,
      imageUrl: res.profileObj.imageUrl,
      name: res.profileObj.name,
    })
    .then(res => {
      if(res.data.success === true){
        console.log(res.data.usersid);
        localStorage.setItem('loginID',JSON.stringify(res.data.usersid));
        alert('Login Successfully'); 
      }
      if(res.data.success === false){
        alert('Login failed'); 
      }
    })
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
      redirectUri="http://localhost:3000/gallery"
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}


/>
    </div>
  )

  // return <button className="login__button"><a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">LOGIN</a></button>;
};

export default LoginButton;