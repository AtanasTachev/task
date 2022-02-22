import React from "react";

import './login.css'

const LoginButton = () => {

  return <button className="login__button"><a href="https://accounts.google.com/servicelogin/signinchooser?flowName=GlifWebSignIn&flowEntry=ServiceLogin">LOGIN</a></button>;
};

export default LoginButton;