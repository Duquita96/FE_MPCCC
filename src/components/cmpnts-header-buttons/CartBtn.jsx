import { useContext } from "react";
import { HeaderContext } from "../../context/HeaderContextProvider.jsx";
import { UserContext } from "../../context/UserContextProvider.jsx";

/** Cart button. Toggles visibility of drop down cart menu */
const CartBtn = () => {
  const { toggleCart } = useContext(HeaderContext);
  const { userState } = useContext(UserContext);

  return (
    <div
      onClick={toggleCart}
      className="box-cart-login"
      id="cart"
      style={{ visibility: userState._id ? "visible" : "hidden" }}
    >
      Cart
    </div>
  );
};

export default CartBtn;
