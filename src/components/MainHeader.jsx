import { useContext } from 'react';
import "../style/headerStyle.css";
import SearchBar from "./Searchbar";
import HeaderContext from '../context/HeaderContext';
import AccountBtn from './cmpnts-header-buttons/AccountBtn';
import LoginLogoutBtn from './cmpnts-header-buttons/LoginLogoutBtn';

const MainHeader = ({ windowWidth }) => {
const {toggleCart,loginMsg} = useContext(HeaderContext)


  return (
    <div className="main-header headers">
      {windowWidth > 768 && <div className="box-cart-login">logo</div>}
      {windowWidth > 768 && <AccountBtn />}
      <SearchBar />
      {windowWidth > 768 && <div onClick={toggleCart} className="box-cart-login">cart</div>}
      {windowWidth > 768 && <LoginLogoutBtn />}
      {loginMsg === 1 && <div className='login-success'>You were successfully logged in</div>}
      {loginMsg === 2 && <div className='login-failed'>Login failed. Please try again</div>}
    </div>
  );
};

export default MainHeader;
