import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const AnimeShows = () => {
  const [animeShows, setAnimeShows] = useState([]);

  useEffect(() => {
    const apiKey = "0e1a1bcd1bcdca4ea625afb133fa2c74";
    const genreId = 16;

    axios
      .get(`https://api.themoviedb.org/3/discover/tv`, {
        params: {
          api_key: apiKey,
          with_genres: genreId,
        },
      })
      .then((response) => {
        setAnimeShows(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Anime Shows</h2>
      <div className="movie-list-container">
        <div className="movie-list">
          {animeShows.map((show) => (
            <Card key={show.id} movie={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeShows;
