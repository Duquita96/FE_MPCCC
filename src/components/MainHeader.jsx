import { useContext, useEffect } from 'react';
import { jwtDecode } from "jwt-decode";
import SearchBar from "./Searchbar";
import { HeaderContext } from '../context/HeaderContextProvider.jsx';
import AccountBtn from './cmpnts-header-buttons/AccountBtn';
import LoginLogoutBtn from './cmpnts-header-buttons/LoginLogoutBtn';
import CartBtn from './cmpnts-header-buttons/CartBtn';
import { UserContext } from '../context/UserContextProvider.jsx';
import { WidthContext } from '../context/WidthContextProvider.jsx';
import "../style/headerStyle.css";
import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  const { loginMsg } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext);
  const { userState, resetUser, addNewUser } = useContext(UserContext);



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === null) { resetUser(); return; }
    const expiration = localStorage.getItem("exp");
    +expiration < Date.now() / 1000 ? resetUser() : addNewUser(jwtDecode(token));
  }, [])

  // For testing
  const logUser = () => {
    console.log(userState);

    navigate('/');
  }

  return (
    <div className="main-header headers">
      {windowWidth > 768 && <div className='logo' onClick={logUser}>LOGO</div>}
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
