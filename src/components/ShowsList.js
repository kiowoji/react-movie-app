import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";

    axios
      .get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`)
      .then((response) => {
        setShows(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="coming">
      <h2 className="title">TV Shows</h2>
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

export default ShowsList;