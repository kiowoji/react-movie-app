import React, { useState } from "react";
import Modal from "./Modal"; // Create a Modal component

function Card({ movie }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <li
        className="card"
        key={movie.id}
        style={{
          backgroundImage: `url(${posterUrl})`,
        }}
        alt={`${movie.title} Poster`}
        onClick={openModal}
      >
        <div className="card-info">
          <div className="card-title">{title}</div>
          <div className="card-details">
            {releaseDate && <span>{new Date(releaseDate).getFullYear()} </span>}
          </div>
        </div>
      </li>
      {isModalOpen && <Modal movie={movie} onClose={closeModal} />}
    </>
  );
}

export default Card;
