import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function PosterInfo() {
  return (
    <div className="poster-info">
      <h1 className="poster-title">One Piece</h1>
      <p className="poster-details">2023 | Live Action | 8 Episodes</p>
      <div className="btn-container">
        <button className="btn-main">Watch Now</button>
        <button className="like">
          <FavoriteBorderOutlinedIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}

export default PosterInfo;
