import { useContext } from "react";
import UserContext from "../../context/UserContext";

/** Account button, appears when user logs in, onclick goes to user account settings */
const AccountBtn = () => {
  
  const { userState } = useContext(UserContext);

  return (
    <div
      className="box-cart-login"
      style={{ visibility: userState._id ? "visible" : "hidden" }}
    >
      Account
    </div>
  );
};

export default AccountBtn;
