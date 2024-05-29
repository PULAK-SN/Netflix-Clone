import React, { useState, useEffect } from "react";
import request from "../request";
import "./Banner.css";

export default function Banner() {
  const [movie, setMovies] = useState([]);
  const base_Url = `https://api.themoviedb.org/3/`;
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${base_Url}${request.fetchNetflixOriginals}`);
      const data = await res.json();
      setMovies(
        data.results[Math.floor(Math.random() * data.results.length - 1)]
      );
    }

    fetchData();
  }, []);
  function trancate(str, n) {
    if (str) return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
              "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
          )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* >>>background image */}
        {/* title */}
        <h1 className="banner__title">{movie.title}</h1>
        {/* div > 2 button */}

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner__description">{trancate(movie.overview, 250)}</h1>
      </div>

      <div className="banner__fadeBottom"></div>
    </header>
  );
}
