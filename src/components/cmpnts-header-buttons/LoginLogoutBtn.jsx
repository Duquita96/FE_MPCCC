import { useContext } from "react";
import { UserContext } from '../../context/UserContextProvider.jsx';
import { HeaderContext } from '../../context/HeaderContextProvider.jsx';

/** Log in/out button, changes display and onClick function depending on logged-in state */
const LoginLogoutBtn = () => {
  const { userState, resetUser } = useContext(UserContext);
  const { toggleLogin } = useContext(HeaderContext);

  return userState._id? 
    <div className="box-cart-login" onClick={resetUser}>Logout</div>
    : <div className="box-cart-login" onClick={toggleLogin}>Login</div>
};

export default LoginLogoutBtn;
