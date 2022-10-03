import React from "react";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import "./Styles/Homescreen.css";

const Homescreen = () => {
  return (
    <div className='homescreen'>
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* Rows */}
    </div>
  );
};

export default Homescreen;
