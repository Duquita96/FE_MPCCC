import { useContext } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { cartContext } from "../context/CartContextProvider";
import { HeaderContext } from "../context/HeaderContextProvider";
import axios from "axios";

const CartItems = () => {

  const { cart, replaceCart, emptyCart } = useContext(cartContext);
  const { toggleCart, closeCart, toggleFeedbackMsg } = useContext(HeaderContext);

  window.addEventListener("click", (e) => {
    if(!e.target.className.includes('cart')) {closeCart()}
  });

  /** Deletes an item based on it's index in the array */
  const delItem = (e) => {
    let newArray = cart.filter((item) => cart.indexOf(item) !== Number(e.target.id));
    replaceCart(newArray);
  };

  /** Displays a confirmation of succesfull buy-cart for 3 seconds */
  const confirmBuy = () => {toggleFeedbackMsg(4); setTimeout(() => {toggleFeedbackMsg(0)}, 5000)}

  const buyCart = () => {
    if (cart.reduce((acc, curr) => acc + curr.price, 0) === 0) {
      alert('Cart is empty'); 
      return;
    }
    const cartObj = {details: cart, totalPrice: cart.reduce((acc, curr) => acc + curr.price, 0)};
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };

    axios
      .post("http://localhost:8000/api/v1/orders/checkout", cartObj, { headers })
      .then((res) => {console.log(res.data.status); emptyCart(); toggleCart(); confirmBuy()})
      .catch((err) => console.log(err));
  };

  return (
    <div className="cartClickAvoid">
      {cart.map((item, key) => {
        return (
          <div key={key} className="cart-item-list">
            <p className="cart-item-desc">
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </p>
            <p className="cart-item-price">{item.price} €</p>
            <button
              className="delBtn pointer"
              id={cart.indexOf(item)}
              onClick={delItem}
            >
              {" "}
              <FaRegTrashCan size={14} />
            </button>
          </div>
        );
      })}

      <div className="cart-total">
        <p>Total amount</p>
        <p>{cart.reduce((acc, curr) => acc + curr.price, 0)} €</p>
      </div>

      <button className="buyBtn cartBtn pointer" onClick={buyCart}>
        Buy
      </button>
      <button className="emptyBtn cartBtn pointer" onClick={emptyCart}>
        <FaRegTrashCan size={14} /> All
      </button>
    </div>
  );
};

export default CartItems;
