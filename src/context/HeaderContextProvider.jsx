import HeaderContext from "./HeaderContext";
import { useState } from "react";

const HeaderContextProvider = ({children}) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleLogin = () => {
    setShowCart(showCart ? false : null);
    setShowLogin(showLogin ? false : true);
  };
  const toggleCart = () => {
    setShowLogin(showLogin ? false : null);
    setShowCart(showCart ? false : true);
  };

  return (
    <HeaderContext.Provider
      value={{ showLogin, showCart, toggleLogin, toggleCart }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
