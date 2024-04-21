import "../style/headerStyle.css";
import SearchBar from "./Searchbar";

const MainHeader = ({ toggleDisplay, windowWidth }) => {
  return (
    <div className="main-header headers">
      {windowWidth > 600 && <div className="box-cart-login">logo</div>}
      {windowWidth > 600 && <div className="box-cart-login">user</div>}
      <SearchBar />
      {windowWidth > 600 && <div className="box-cart-login">cart</div>}
      {windowWidth > 600 && <div onClick={toggleDisplay} className="box-cart-login">login</div>}
    </div>
  );
};

export default MainHeader;
