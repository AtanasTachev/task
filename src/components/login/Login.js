import './login.css'
import React, { useState } from "react";
import { GoogleLogin } from 'react-google-login';
   

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
       {loginData ? (
            <div className='center'>
              <h6>You logged in as {loginData.email}</h6>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText={'Login'}
            onSuccess={handleLogin}
            onFailure={handleFailure}
            uxMode='redirect'
            redirectUri="http://localhost:3000/gallery"
            cookiePolicy={'single_host_origin'}
            // isSignedIn={true} 
            ></GoogleLogin>
            )}
    </div>
  )
};

export default LoginButton;

