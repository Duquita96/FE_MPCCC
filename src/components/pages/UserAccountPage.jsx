import { useContext } from "react";
import Login from "../Login.jsx";
import Cart from "../Cart.jsx";
import HeaderContext from "../../context/HeaderContext.jsx";
import UserSettings from "../UserSetting.jsx";
import PageWrapper from "../PageWrapper.jsx";

const UserAccount = () => {
  const { showLogin, showCart } = useContext(HeaderContext);

  return (
    <PageWrapper>
      {showLogin && <Login />}
      {showCart && <Cart />}
      <UserSettings />
    </PageWrapper>
  );
};

export default UserAccount;
