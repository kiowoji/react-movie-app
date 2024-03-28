import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <Link to="/movies" className="header-item">
          Movies
        </Link>
        <Link to="/tv-shows" className="header-item">
          TV Shows
        </Link>
        <Link to="/tv-shows" className="header-item">
          Anime
        </Link>
      </ul>
      <Link to="/search" className="sidebar-link">
        <SearchOutlinedIcon />
      </Link>
    </div>
  );
}

export default Header;
