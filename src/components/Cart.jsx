import { useContext, useEffect, useState } from "react";
import { UserContext } from '../context/UserContextProvider.jsx';
import { HeaderContext } from "../context/HeaderContextProvider.jsx";
import CartItems from "./CartItems";
import "../style/cartStyle.css";

const Cart = () => {
  const { loggedIn } = useContext(UserContext);
  const { showCart } = useContext(HeaderContext);
  const [animate, setAnimate] = useState(false);

  useEffect(()=>{setAnimate(true)}, [showCart])

  return (
    <div className={!animate? 'cart-container' : 'cart-container cart-out' }>
      {!loggedIn && <p>Please login to see your cart</p>}
      {loggedIn && <CartItems />}
    </div>
  );
};

export default Cart;
