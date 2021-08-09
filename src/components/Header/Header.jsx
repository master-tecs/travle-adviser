import SearchIcon from "@material-ui/icons/Search";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h3>TravleAdviser</h3>
      </div>
      <div className="header__right">
        <p>Explore new places</p>
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
}

export default Header;
