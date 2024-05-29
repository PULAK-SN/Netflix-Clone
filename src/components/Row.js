import React, { useEffect, useState } from "react";
import "./Row.css";

const base_Url = `https://api.themoviedb.org/3/`;
const base_image_url = "https://image.tmdb.org/t/p/original";
export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  // a snippet of code which runs based on a specific condition/variable

  useEffect(() => {
    // if [] run once and dont't run again
    async function fetchData() {
      const request = await fetch(`${base_Url}${fetchUrl}`);
      const data = await request.json();
      setMovies(data.results);
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "rowPosterLarge"}`}
            src={`${base_image_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}
