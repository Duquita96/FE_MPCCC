import { Link } from "react-router-dom";
import { useContext } from "react";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import { HeaderContext } from '../../context/HeaderContextProvider.jsx';
import { WidthContext } from '../../context/WidthContextProvider.jsx';
import UserSettings from "../cmpnts-settings-sections/UserSetting.jsx";
import MobileNavBar from "../cmpnts-homepage-navbars/MobileNavBar.jsx";
import PageWrapper from "../PageWrapper.jsx";

const UserAccount = () => {
  const { showLogin, showCart } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext)

  return (
    <PageWrapper>
      {showLogin && <Login />}
      {showCart && <Cart />}
      {windowWidth <= 768 && <MobileNavBar  />}
      <Link to={"/"} className="settings-home-btn">
        Back 
      </Link>
      <UserSettings />
    </PageWrapper>
  );
};

export default UserAccount;
