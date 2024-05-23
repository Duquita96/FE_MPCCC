import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItems = () => {
  
  const [cart, setCart] = useState(["Game", "Book", "Tour"]);

  const delItem = (e) => {
    let newArray = cart.filter((item) => cart.indexOf(item) !== Number(e.target.id));
    setCart(newArray);
  };

  return (
    <div>
      {cart.map((item, key) => {
        return (
          <div key={key} className="cart-item-list">
            <p className="cart-item-desc">{item}</p>
            <p>0,00€</p>
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
        <p>0,00€</p>
      </div>

      <button className="buyBtn cartBtn pointer">Buy</button>
      <button className="emptyBtn cartBtn pointer" onClick={()=> setCart([])}>
      <FaRegTrashCan size={14} /> All
      </button>
    </div>
  );
};

export default CartItems;
