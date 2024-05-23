import { useState } from "react";

const CartItems = () => {
  
  const [cart, setCart] = useState(["Game", "Book", "Tour"]);

  const delItem = (e) => {
    let newArray = cart.filter((item) => cart.indexOf(item) !== Number(e.target.id));
    setCart(newArray);
  };

  return (
    <div>
      {cart.map((item, index) => {
        return (
          <div className="cart-item-list" key={index}>
            <p className="cart-item-desc">{item}</p>
            <p>0,00€</p>
            <button
              className="delBtn pointer"
              id={cart.indexOf(item)}
              onClick={delItem}
            >
              D
            </button>
          </div>
        );
      })}

      <div className="cart-total">
        <p>Total amount</p>
        <p>0,00€</p>
      </div>

      <button className="buyBtn cartBtn pointer">Buy</button>
      <button className="emptyBtn cartBtn pointer" onClick={()=> setCart([])}>Empty</button>
    </div>
  );
};

export default CartItems;
