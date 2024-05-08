import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { NavLink } from "react-router-dom";

/** Account button, appears when user logs in, onclick goes to user account settings */
const AccountBtn = () => {
  
  const { userState } = useContext(UserContext);

  return (
    <NavLink
      className="box-cart-login"
      style={{ visibility: userState._id ? "visible" : "hidden" }}
    >
      Account
    </NavLink>
  );
};

export default AccountBtn;
