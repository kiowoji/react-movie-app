function Card({ movie }) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <li
      className="card"
      key={movie.id}
      style={{
        backgroundImage: `url(${posterUrl})`,
      }}
      alt={`${movie.title} Poster`}
    >
      <div className="card-info">
        <div className="card-title">{movie.title}</div>
        <div className="card-details">
          {movie.release_date && (
            <span>{new Date(movie.release_date).getFullYear()} </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default Card;
