import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";

/** Account button, appears when user logs in, onclick goes to user account settings */
const AccountBtn = () => {
  
  const { userState } = useContext(UserContext);

  return (
    <Link
    to={'/user-account'}
      className="box-cart-login"
      style={{ visibility: userState._id ? "visible" : "hidden" }}
    >
      Account
    </Link>
  );
};

export default AccountBtn;
