import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import {  Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Link to="/" className="logo">
          Cinerly
        </Link>
      </div>
      <ul>
        <li className="title-small">
          <MovieFilterOutlinedIcon />
          <Link to="/" className="sidebar-link">
            Home
          </Link>
        </li>
        <li className="title-small">
          <TrendingUpOutlinedIcon />
          <Link to="/trending" className="sidebar-link">
            Trending
          </Link>
        </li>
        <li className="title-small">
          <CalendarMonthOutlinedIcon />
          <Link to="/coming-soon" className="sidebar-link">
            Coming soon
          </Link>
        </li>
        <li className="title-small">
          <SearchOutlinedIcon /> 
          <Link to="/search" className="sidebar-link">
            Search
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
