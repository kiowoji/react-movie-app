import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <div className="header">
      <ul>
        <li className="header-item">Movies</li>
        <li className="header-item">TV Shows</li>
        <li className="header-item">Anime</li>
      </ul>
      <SearchOutlinedIcon />
    </div>
  );
}

export default Header;
