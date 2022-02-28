import './login.css'
import React, { useEffect, useState, useContext } from "react";
import { GoogleLogin } from 'react-google-login';
// import ls from 'local-storage';
import { AuthContext } from '../../contexts/AuthContext';
// import * as userService from '../../services/userService'

const clientId = '415229235264-hodh11mdmqdi1dag1kiugrhnr7uv3sjf.apps.googleusercontent.com';
            

const LoginButton = () => {
  
  const [user, setUser] = useState();
  
  const {login} = useContext(AuthContext); 
  // console.log(login);

  
  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    setUser(res.profileObj.name);
  };
  
  // console.log(user);
  useEffect( async() => {
    try {
      await login(user);
    } catch (error) {
      console.log({message : error.message});
    }
      // localStorage.setItem('user', user); 
    }, [user])
    

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

