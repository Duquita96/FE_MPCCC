import HeaderContext from "./HeaderContext";
import { useState } from "react";

const HeaderContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [loginMsg, setLoginMsg] = useState(0);

  const toggleLogin = () => {
    setShowCart(showCart ? false : null);
    setShowLogin(showLogin ? false : true);
  };
  const toggleCart = () => {
    setShowLogin(showLogin ? false : null);
    setShowCart(showCart ? false : true);
  };

  const toggleLoginMsg = (number) => {
    setLoginMsg(number);
  }

  return (
    <HeaderContext.Provider
      value={{ showLogin, showCart, loginMsg, toggleLogin, toggleCart, toggleLoginMsg }}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
