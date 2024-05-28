import { createContext, useEffect, useState } from "react";

export const HeaderContext = createContext();

/** Provides the functions and states for the functionality of the header and drop down menus*/
const HeaderContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [loginMsg, setLoginMsg] = useState(0);

 window.onresize = () => {if (showCart || showLogin) {setShowCart(false);setShowLogin(false)}};

  /** Toggles between Login visibility and turns of Cart visibility if needed */
  const toggleLogin = () => {
    setShowCart(showCart ? false : null);
    setShowLogin(showLogin ? false : true);
  };
  /** Toggles between Cart visibility and turns of Login visibility if needed */
  const toggleCart = () => {
    setShowLogin(showLogin ? false : null);
    setShowCart(showCart ? false : true);
  };
  /** Toggles between the success, fail and invisble modes of the login status */
  const toggleLoginMsg = (number) => {
    setLoginMsg(number);
  };

  const closeCart = () => setShowCart(false);

  return (
    <HeaderContext.Provider
      value={{
        showLogin,
        showCart,
        loginMsg,
        toggleLogin,
        toggleCart,
        toggleLoginMsg,
        closeCart,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
