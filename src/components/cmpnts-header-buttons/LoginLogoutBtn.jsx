import { useContext } from "react";
import UserContext from "../../context/UserContext";
import HeaderContext from "../../context/HeaderContext";

/** Log in/out button, changes display and onClick function depending on logged-in state */
const LoginLogoutBtn = () => {
  const { userState, resetUser } = useContext(UserContext);
  const { toggleLogin } = useContext(HeaderContext);

  return userState._id? 
    <div className="box-cart-login" onClick={resetUser}>logout</div>
    : <div className="box-cart-login" onClick={toggleLogin}>login</div>
};

export default LoginLogoutBtn;
