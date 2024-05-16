import UserInfo from "./UserInfo";
import "../../style/userSettings.css";

const UserPanel = () => {


  
  return (
    <>
      <UserInfo />
      <div className="settings-user-admin">
        <h3>Shipping addresses</h3>
        <button className="addBtn pointer">+</button>
      </div>
      <div className="settings-user-options">
        <h3>Options</h3>
      </div>
      <div className="settings-user-delete">
        <h3>Delete Account</h3>
        <button className="setting-del-btn pointer">Delete</button>
      </div>
      <div className="settings-user-orders">
        <h3>Current orders</h3>
      </div>
      <div className="settings-user-orders">
        <h3>Order History</h3>
      </div>
    </>
  );
};

export default UserPanel;
