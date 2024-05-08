import { useContext } from "react";
import HeaderContext from "../../context/HeaderContext";

/** Cart button. Toggles visibility of drop down cart menu */
const CartBtn = () => {
  const { toggleCart } = useContext(HeaderContext);

  return (
    <div onClick={toggleCart} className="box-cart-login">
      cart
    </div>
  );
};

export default CartBtn;
