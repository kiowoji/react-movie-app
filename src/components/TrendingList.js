import Card from "./Card";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="trending">
      <h2 className="title">Trending now</h2>
      <div className="movie-list-container">
        <ul className="movie-list">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Trending;
