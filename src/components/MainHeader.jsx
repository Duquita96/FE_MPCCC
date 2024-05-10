import { useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import SearchBar from "./Searchbar";
import HeaderContext from '../context/HeaderContext';
import AccountBtn from './cmpnts-header-buttons/AccountBtn';
import LoginLogoutBtn from './cmpnts-header-buttons/LoginLogoutBtn';
import CartBtn from './cmpnts-header-buttons/CartBtn';
import "../style/headerStyle.css";
import UserContext from '../context/UserContext';

const MainHeader = ({ windowWidth }) => {
  
const { loginMsg } = useContext(HeaderContext);
const { resetUser, addNewUser} = useContext(UserContext);

useEffect(()=> {
  const token = localStorage.getItem("token");
  const expiration = localStorage.getItem("exp");
  token && +expiration < Date.now()/1000 ? resetUser : addNewUser(jwtDecode(token));
}, [])


  return (
    <div className="main-header headers">
      {windowWidth > 768 && <div>*LOGO*</div>}
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
