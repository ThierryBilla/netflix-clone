import React from 'react';
import '../styles/SignUp.css'; 

function SignUp() {
  return (
    <div className="sign-up-page"> 
      <div className="sign-up-container"> 
        <h1 className="sign-up-title">Sign Up</h1>  
        <form className="sign-up-form">  
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" required />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" required />
          </div>
          <div className="input-field">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div className="input-field">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" required />
          </div>
          <div className="input-field">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />
          </div>
          <div className="input-field">
            <label>
              <input type="checkbox" name="terms" required />
              I agree to the Terms and Conditions
            </label>
          </div>
          <button className="sign-up-button">Sign Up</button> 
        </form>
      </div>
    </div>
  );
}

export default SignUp;
