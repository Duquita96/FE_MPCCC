import { useContext } from 'react';
import "../style/headerStyle.css";
import SearchBar from "./Searchbar";
import HeaderContext from '../context/HeaderContext';

const MainHeader = ({ windowWidth }) => {

const {toggleLogin,toggleCart} = useContext(HeaderContext)

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
