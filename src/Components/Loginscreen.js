import React, { useState } from "react";
import "../Styles/Loginscreen.css";
import Signupscreen from "./Signupscreen";

const Loginscreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='login_screen'>
      <div className='login_screen_background'>
        <img
          className='login_screen_logo'
          src='./Images/NETFLIX logo.png'
          alt='login_banner'
        />
        <button className='login_screen_button' onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='login_screen_gradient' />
      </div>

      <div className='login_screen_body'>
        {signIn ? (
          <Signupscreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className='login_screen_input'>
              <form>
                <input type='email' placeholder='Email address' />
                <button
                  onClick={() => setSignIn(true)}
                  className='login_screen_getstarted'
                >
                  Get Started {">"}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Loginscreen;
