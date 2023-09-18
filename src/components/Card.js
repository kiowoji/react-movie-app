function Card({ movie }) {
  const title = movie.title || movie.name; 
  const releaseDate = movie.release_date || movie.first_air_date;
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
        <div className="card-title">{title}</div>
        <div className="card-details">
          {releaseDate && (
            <span>{new Date(releaseDate).getFullYear()} </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default Card;
