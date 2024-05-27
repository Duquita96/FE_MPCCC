import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

/** Provides the functions and states for the functionality of the cart*/
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /** Updates the cart state and the local storage */
  const addToCart = (obj) => {
    const newCart = cart;
    newCart.push(obj);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  /** Replaces the cart state and the local storage with a new array */
  const replaceCart = (array) => {
    setCart(array);
    localStorage.setItem("cart", JSON.stringify(array));
  };

  /** Replaces the cart state and the local storage with a new array */
  const emptyCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  useEffect(() => {
    localStorage.getItem("cart")
      ? setCart(JSON.parse(localStorage.getItem("cart")))
      : setCart([]);
  }, []);

  return (
    <cartContext.Provider
      value={{
        cart,
        addToCart,
        replaceCart,
        emptyCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
