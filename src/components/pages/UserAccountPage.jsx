import { useContext } from "react";
import MainHeader from "../MainHeader.jsx";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import Footer from "../Footer.jsx";

import HeaderContext from "../../context/HeaderContext.jsx";
import WidthContext from "../../context/WidthContext.jsx";
import UserSettings from "../UserSetting.jsx";

const UserAccount = () => {
  const { showLogin, showCart } = useContext(HeaderContext);
  const { windowWidth } = useContext(WidthContext);

  return (
    <>
      <MainHeader windowWidth={windowWidth} />
      {showLogin && <Login />}
      {showCart && <Cart />}
      <UserSettings />
      <Footer />
    </>
  );
};

export default UserAccount;
