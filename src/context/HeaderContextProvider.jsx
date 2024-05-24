import { createContext, useEffect, useState } from 'react';

export const HeaderContext = createContext();


/** Provides the functions and states for the functionality of the header and drop down menus*/
const HeaderContextProvider = ({ children }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [loginMsg, setLoginMsg] = useState(0);
  const [cart, setCart] = useState([]);


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

   /** Updates the cart state and the local storage */
  const addToCart = (obj) => {
    const newCart = cart;
    newCart.push(obj);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

   /** Replaces the cart state and the local storage with a new array */
   const replaceCart = (array) => {
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(array));
  }

  /** Replaces the cart state and the local storage with a new array */
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  useEffect(() => {
    localStorage.getItem("cart")? setCart(JSON.parse(localStorage.getItem("cart"))) : setCart([]);
  }, []);


  return (
    <HeaderContext.Provider
      value={{
        showLogin,
        showCart,
        loginMsg,
        cart,
        toggleLogin,
        toggleCart,
        toggleLoginMsg,
        addToCart,
        replaceCart,
        emptyCart
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderContextProvider;
