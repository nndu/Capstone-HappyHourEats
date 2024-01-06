import React from 'react';
import "./Login.scss";
import { Form} from 'react-router-dom';



function Login () {
    return (
        <form className="login">
        <h2>Don't miss out on our newest deals! </h2>
        <p>Log in to save big</p>
        <input type="text" placeholder="User Name" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log In" />
        <div className="links">
          <a href="#">Forgot password</a>
          <a href="#">Register</a>
        </div>
      </form>
      );
    }
  
    export default Login;