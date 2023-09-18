import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

const TopShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
      .then((response) => {
        const topRatedShowsFrom2000 = response.data.results.filter(
          (show) =>
            show.first_air_date &&
            new Date(show.first_air_date).getFullYear() >= 2000
        );
        setShows(topRatedShowsFrom2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <div className="flex-row">
        <h2 className="title">Top Rated TV Shows</h2>
        <Link to="/tv-shows" className="explore">
          - explore all
        </Link>
      </div>
      <div className="movie-list-container">
        <div className="movie-list">
          {shows.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopShows;
