import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

function NowPlayingMovies() {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <h2 className="title">now playing movies</h2>
      <div className="movie-list-container">
        <ul
          className={`movie-list ${
            location.pathname === "/trending" ? "wrap" : "scroll"
          }`}
        >
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NowPlayingMovies;
