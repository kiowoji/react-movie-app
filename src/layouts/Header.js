import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="header-item">Movies</li>
        <li className="header-item">TV Shows</li>
        <li className="header-item">Anime</li>
      </ul>
      <Link to="/search" className="sidebar-link">
          <SearchOutlinedIcon />
      </Link>
    </div>
  );
}

export default Header;
