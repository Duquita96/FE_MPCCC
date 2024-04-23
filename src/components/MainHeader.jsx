import "../style/headerStyle.css";
import SearchBar from "./Searchbar";

const MainHeader = ({ toggleFunctions, windowWidth }) => {

  const {toggleLogin, toggleCart} = toggleFunctions;

  return (
    <div className="main-header headers">
      {windowWidth > 768 && <div className="box-cart-login">logo</div>}
      {windowWidth > 768 && <div className="box-cart-login">user</div>}
      <SearchBar />
      {windowWidth > 768 && <div onClick={toggleCart} className="box-cart-login">cart</div>}
      {windowWidth > 768 && <div onClick={toggleLogin} className="box-cart-login">login</div>}
    </div>
  );
};

export default MainHeader;
