import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const ComingList = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74"; 

    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then((response) => {
        setUpcomingMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="coming">
      <h2 className="title">Coming Soon</h2>
      <div className="movie-list-container">
        <div className="movie-list">
          {upcomingMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingList;
