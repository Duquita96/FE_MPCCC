import { useContext } from "react";
import UserContext from "../context/UserContext";
import CartItems from "./CartItems";
import "../style/cartStyle.css";

const Cart = () => {
  const { loggedIn } = useContext(UserContext);

  return (
    <div className="cart-container">
      {!loggedIn && <p>Please login to see your cart</p>}
      {loggedIn && <CartItems />}
    </div>
  );
};

export default Cart;
