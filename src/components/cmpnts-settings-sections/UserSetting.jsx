import UserPanel from "./UserPanel";
import { useContext, useEffect } from "react";
import { UserContext } from '../../context/UserContextProvider.jsx';
import axios from "axios";
import UserNotLoggedIn from "./UserNotLoggedIn";

const UserSettings = () => {
  const { addNewUser, resetUser, loggedIn, addOrders } = useContext(UserContext);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    axios
      .get("http://localhost:8000/api/v1/users/me", { headers })
      .then((res) => {
        res.data.status === "success" ? addNewUser(res.data.data) : resetUser();
        const orders = res.data.data.orders;
        const newOrderList = [];
        if(orders.length > 0) {
          orders.forEach(order => {
            axios.get(`http://localhost:8000/api/v1/orders/${order}`, { headers })
            .then((res) => newOrderList.push(res.data.data))
            .catch(err => console.log(err))
          }); 
        }
        addOrders(newOrderList);
      })
      .catch((err) => console.log(err));
  }, [loggedIn]);

  return (
    <div className="settings-container">
      {loggedIn && <UserPanel />}
      {!loggedIn && <UserNotLoggedIn />}
    </div>
  );
};

export default UserSettings;
