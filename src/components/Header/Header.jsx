import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import "./Header.scss";

function Header({ onLoad, onPlaceChanged }) {
  return (
    <div className="header">
      <div className="header__left">
        <h3>TravleAdviser</h3>
      </div>
      <div className="header__right">
        <p>Explore new places</p>
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <div className="search">
            <SearchIcon />
            <input type="text" placeholder="Search.." />
          </div>
        </Autocomplete>
      </div>
    </div>
  );
}

export default Header;
