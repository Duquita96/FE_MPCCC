import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HeaderContext } from "../context/HeaderContextProvider";

const CartItems = () => {
  
  const { cart, replaceCart, emptyCart } = useContext(HeaderContext);

  const delItem = (e) => {
    let newArray = cart.filter((item) => cart.indexOf(item) !== Number(e.target.id));
    replaceCart(newArray);
  };

 
  return (
    <div>
      {cart.map((item, key) => {
        return (
          <div key={key} className="cart-item-list">
            <p className="cart-item-desc">{item.name.charAt(0).toUpperCase() + item.name.slice(1) }</p>
            <p className="cart-item-price">{item.price} €</p>
            <button
              className="delBtn pointer"
              id={cart.indexOf(item)}
              onClick={delItem}
            > <FaRegTrashCan size={14} />
            </button>
          </div>
        );
      })}

      <div className="cart-total">
        <p>Total amount</p>
        <p>€</p>
      </div>

      <button className="buyBtn cartBtn pointer">Buy</button>
      <button className="emptyBtn cartBtn pointer" onClick={emptyCart}>
      <FaRegTrashCan size={14} /> All
      </button>
    </div>
  );
};

export default CartItems;
