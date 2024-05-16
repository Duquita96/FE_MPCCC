import { Link } from "react-router-dom";
import { useContext } from "react";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import HeaderContext from "../../context/HeaderContext.jsx";
import UserSettings from "../cmpnts-settings-sections/UserSetting.jsx";
import PageWrapper from "../PageWrapper.jsx";

const UserAccount = () => {
  const { showLogin, showCart } = useContext(HeaderContext);

  return (
    <PageWrapper>
      {showLogin && <Login />}
      {showCart && <Cart />}
      <Link to={"/"} className="settings-home-btn">
        Back 
      </Link>
      <UserSettings />
    </PageWrapper>
  );
};

export default UserAccount;
