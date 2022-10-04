import React, { useEffect, useState } from "react";
import "../Styles/Banner.css";
import axios from "../features/tmdbAPI/axios";
import requests from "../features/tmdbAPI/Requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchMovie() {
      try {
        let response = await axios.get(requests.fetchNetflixOriginals);
        // console.log("[ Banner ]: fetchMovie Response = ", response.data);
        // Set random Banner movie:
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      } catch (err) {
        // console.log("[ Banner ]: fetchMovie Error = ", err);
      }
    }

    fetchMovie();
  }, []);

  console.log(movie);

  function truncateDescription(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
      }}
    >
      <div className='banner_container'>
        <h1 className='banner_title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner_description'>
          {truncateDescription(movie?.overview, 150)}
        </h1>
      </div>

      <div className='banner_fade_bottom' />
    </header>
  );
};

export default Banner;
