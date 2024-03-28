import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from '@mui/icons-material/StarRate';

function Modal({ movie, onClose }) {
  const title = movie.title || movie.name;
  const releaseDate = movie.release_date || movie.first_air_date;
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const rate = movie.vote_average.toFixed(1);
  console.log(movie);

  return (
    <div className="dark-screen">
      <div className="modal">
        <img className="modal-img" src={posterUrl} alt="movie"></img>
        <div className="modal-info">
          <h2 className="modal-title">{title}</h2>
          <div className="rate-container">
            <StarRateIcon fontSize="medium" className="rate-icon"></StarRateIcon>
            <p className="modal-rate">{rate}/10</p>
          </div>
          <p>{movie.overview}</p>
          <p>Release Date: {releaseDate}</p>
        </div>
        <CloseIcon
          fontSize="medium"
          className="close-btn"
          onClick={onClose}
        >
        </CloseIcon>
      </div>
    </div>
  );
}

export default Modal;
