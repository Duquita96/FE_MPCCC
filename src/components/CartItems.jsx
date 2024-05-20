const CartItems = () => {
  const items = ["Game", "Book", "Tour"];

  return (
    <div>
      {items.map((item) => {
        return (
          <div className="cart-item-list">
            <p className="cart-item-desc">{item}</p>
            <p>0,00€</p>
            <button className="delBtn pointer">D</button>
          </div>
        );
      })}

      <div className="cart-total">
        <p>Total amount</p>
        <p>0,00€</p>
      </div>

      <button className="buyBtn cartBtn pointer">Buy</button>
      <button className="emptyBtn cartBtn pointer">Empty</button>
    </div>
  );
};

export default CartItems;
