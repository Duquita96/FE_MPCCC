import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContextProvider.jsx";

const UserOrders = () => {
  const { orderList } = useContext(UserContext);

  const [render, setRender] = useState(false);

  useEffect(() => {setTimeout(() => {setRender(true)},100)}, [])

  return (
    <>
      <div className="settings-user-orders">
        <h3 className="h3settings">Current orders</h3>
        {render && orderList?.map((order) => {
          if (order.status === "pending") {
            return (
              <div key={order._id} className="order">
                <p>Order: <a className="orderLink" href="#">{order._id}</a> - Pending</p>
                <p>Date: {order.createdAt.slice(0,10)}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="settings-user-orders">
        <h3 className="h3settings">Order History</h3>
        {render && orderList?.map((order) => {
          if (order.status === "complete") {
            return (
              <div key={order._id} className="order">
                <p>Order: <a className="orderLink" href="#">{order._id}</a> - Delivered</p>
                <p>{order.totalPrice} € </p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default UserOrders;
