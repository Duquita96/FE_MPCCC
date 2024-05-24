import { useContext } from "react";
import { HeaderContext } from '../../context/HeaderContextProvider.jsx';

/** Cart button. Toggles visibility of drop down cart menu */
const CartBtn = () => {
  const { toggleCart, cart } = useContext(HeaderContext);

  return (
    <div onClick={toggleCart} className="box-cart-login">
      Cart ({cart.length})
    </div>
  );
};

export default CartBtn;
