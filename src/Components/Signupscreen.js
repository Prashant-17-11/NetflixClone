import React from "react";
import "../Styles/Signupscreen.css";

const Signupscreen = () => {
  return (
    <div className='signup_screen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='Password' type='password' />
        <button type='submit'>Sign In</button>
        <h4>
          <span className='signup_screen_gray'>New to Netflix?</span>{" "}
          <span className='signup_screen_link'>Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
};

export default Signupscreen;
