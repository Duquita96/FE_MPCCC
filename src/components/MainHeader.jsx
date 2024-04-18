import "../style/headerStyle.css";
import SearchBar from "./Searchbar";

const MainHeader = ({ toggleDisplay }) => {
  return (
    <div className="main-header headers">
      <div className="box-cart-login">logo</div>
      <div className="box-cart-login">user</div>
      <SearchBar />
      <div className="box-cart-login">cart</div>
      <div onClick={toggleDisplay} className="box-cart-login">login</div>
    </div>
  );
};

export default MainHeader;
