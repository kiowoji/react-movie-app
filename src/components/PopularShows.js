import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const PopularShows = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`)
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
        <h2 className="title">Popular Shows</h2>
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

export default PopularShows;
