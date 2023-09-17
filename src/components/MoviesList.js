import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Movies</h2>
      <div className="movie-list-container">
        <div className="movie-list">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
