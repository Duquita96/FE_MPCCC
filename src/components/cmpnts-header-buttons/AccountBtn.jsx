import { useContext } from "react";
import { UserContext } from '../../context/UserContextProvider.jsx';
import { Link } from "react-router-dom";

/** Account button, appears when user logs in, onclick goes to user account settings */
const AccountBtn = () => {
  
  const { userState } = useContext(UserContext);

  return (
    <Link
    to={'/user-account'}
      className="accountBtn"
      style={{ visibility: userState._id ? "visible" : "hidden" }}
    >
      Account
    </Link>
  );
};

export default AccountBtn;
