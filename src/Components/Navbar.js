import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`navbar ${show && "navbar_black"}`}>
      <div className='navbar_container'>
        <img
          className='navbar_logo'
          src='./Images/NETFLIX logo.png'
          alt='logo'
        />
        <img
          className='navbar_avatar'
          src='./Images/Netflix-avatar.png'
          alt='avatar'
        />
      </div>
    </div>
  );
};

export default Navbar;
