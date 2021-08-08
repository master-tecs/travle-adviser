import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__left">TravleAdviser</div>
      <div className="header__right">
        <p>Explore new places</p>
        <div className="search">
          {/* icon */}
          <input type="text" placeholder="Search.." />
        </div>
      </div>
    </div>
  );
}

export default Header;
