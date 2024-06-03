import { createContext, useState } from "react";

export const HeaderContext = createContext();

/** Provides the functions and states for the functionality of the header and drop down menus*/
const HeaderContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState(0);
  const [searchData, setSearchData] = useState([]);

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
  const toggleFeedbackMsg = (number) => {
    setFeedbackMsg(number);
  };

  const updateSearchData = (array) => {setSearchData(array)};

  const closeCart = () => setShowCart(false);
  const closeLogin = () => setShowLogin(false);

  
  return (
    <HeaderContext.Provider
      value={{
        showLogin,
        showCart,
        feedbackMsg,
        searchData,
        toggleLogin,
        toggleCart,
        toggleFeedbackMsg,
        closeCart,
        closeLogin,
        updateSearchData
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
