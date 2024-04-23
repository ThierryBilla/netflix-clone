// Login.jsx

import React from 'react';
import '../styles/Login.css'; 

function Login() {
    return (
      <div className="login-page">
        <div className="login-container">
          <h1 className="login-title">Login</h1>
          <form className="login-form">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    );
  }
  

export default Login;
