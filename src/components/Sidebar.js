import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">Cinerly</div>
      <ul>
        <li className="title-small">
          <MovieFilterOutlinedIcon />
          <button>Home</button>
        </li>
        <li className="title-small">
          <TrendingUpOutlinedIcon />
          <button>Trending</button>
        </li>
        <li className="title-small">
          <CalendarMonthOutlinedIcon />
          <button>Coming soon</button>
        </li>
        <li className="title-small">
          <FavoriteBorderOutlinedIcon />
          <button>Favourites</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
