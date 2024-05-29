import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import SearchBar from './Searchbar';
import { HeaderContext } from '../context/HeaderContextProvider.jsx';
import AccountBtn from './cmpnts-header-buttons/AccountBtn';
import LoginLogoutBtn from './cmpnts-header-buttons/LoginLogoutBtn';
import CartBtn from './cmpnts-header-buttons/CartBtn';
import { UserContext } from '../context/UserContextProvider.jsx';
import { WidthContext } from '../context/WidthContextProvider.jsx';
import '../style/headerStyle.css';

const MainHeader = () => {
  const { feedbackMsg } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext);
  const { resetUser, addNewUser } = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null) {
      resetUser();
      return;
    }
    const expiration = localStorage.getItem('exp');
    +expiration < Date.now() / 1000
      ? resetUser()
      : addNewUser(jwtDecode(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='main-header headers'>
      {windowWidth > 768 && <Link to='/' className='logo'>PMC&#179;</Link>}
      {windowWidth > 768 && <AccountBtn />}
      <SearchBar />
      {windowWidth > 768 && <CartBtn />}
      {windowWidth > 768 && <LoginLogoutBtn />}
      {feedbackMsg === 1 && (<div className='login-success'>You were successfully logged in</div>)}
      {feedbackMsg === 2 && (<div className='login-failed'>Login failed. Please try again</div>)}
      {feedbackMsg === 3 && (<div className='login-success'>Item added to cart</div>)}
      {feedbackMsg === 4 && (<div className='login-success'>Order added. We have sent you an email.</div>)}
    </div>
  );
};

export default MainHeader;
