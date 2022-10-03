import React from "react";
import "../Styles/Banner.css";

const Banner = () => {
  function truncateDescription(string, n) {
    return string.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC')`,
      }}
    >
      <div className='banner_container'>
        <h1 className='banner_title'>Movie Name</h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncateDescription(
            `This is some sample description to see if the truncate fucntion truncates string which is too long.. Strings which are too long if rendered as it is would loook bad so we would truncate them after a certain length`,
            150
          )}
        </h1>
      </div>

      <div className='banner_fade_bottom' />
    </header>
  );
};

export default Banner;
