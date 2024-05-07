import { useContext, useEffect } from 'react';
import SearchBar from "./Searchbar";
import HeaderContext from '../context/HeaderContext';
import AccountBtn from './cmpnts-header-buttons/AccountBtn';
import LoginLogoutBtn from './cmpnts-header-buttons/LoginLogoutBtn';
import CartBtn from './cmpnts-header-buttons/CartBtn';
import "../style/headerStyle.css";

const MainHeader = ({ windowWidth }) => {
  
const {loginMsg} = useContext(HeaderContext);

// useEffect(()=> {
//   if(userState._id) {
//     // check token expiry validity
//     // if not valid => trigger logout
//   }
// }, [])


  return (
    <div className="main-header headers">
      {windowWidth > 768 && <div className="box-cart-login">logo</div>}
      {windowWidth > 768 && <AccountBtn />}
      <SearchBar />
      {windowWidth > 768 && <CartBtn />}
      {windowWidth > 768 && <LoginLogoutBtn />}
      {loginMsg === 1 && <div className='login-success'>You were successfully logged in</div>}
      {loginMsg === 2 && <div className='login-failed'>Login failed. Please try again</div>}
    </div>
  );
};

export default MainHeader;
