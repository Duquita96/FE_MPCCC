import { useContext } from "react";
import { UserContext } from "../../context/UserContextProvider.jsx";

const UserOrders = () => {
  const { orderList } = useContext(UserContext);

  return (
    <>
      <div className="settings-user-orders">
        <h3 className="h3settings">Current orders</h3>
        {orderList?.map((order) => {
          if (order.status === "pending") {
            return (
              <div key={order._id} className="order">
                <p>Order: {order._id}</p>
                <p>{order.totalPrice} € </p>
              </div>
            );
          }
        })}
      </div>
      <div className="settings-user-orders">
        <h3 className="h3settings">Order History</h3>
        {orderList?.map((order) => {
          if (order.status === "complete") {
            return (
              <div key={order._id} className="order">
                <p>Order: {order._id}</p>
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
