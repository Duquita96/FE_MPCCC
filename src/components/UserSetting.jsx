import { Link } from "react-router-dom";
import "../style/userSettings.css";

const UserSettings = () => {
  return (
    <div className="settings-container">
      <Link to={"/"} className="settings-home-btn">
        Back to Homepage
      </Link>
      <div className="settings-user-info">
        <h3>Your information:</h3>
        <div>Name:</div>
        <div>Surname: </div>
        <div>Email:</div>
        <div>Password: ****</div>
        <button>Modify</button>
        <button>Go to admin panel</button>
      </div>
      <div className="settings-user-admin">
        <h3>Shipping addresses</h3>
        <button>Add</button>
      </div>
      <div className="settings-user-options">
        <h3>Options</h3>
      </div>
      <div className="settings-user-delete">
        <h3>Delete Account</h3>
        <button className="setting-del-btn">Delete</button>
      </div>
      <div className="settings-user-orders">
        <h3>Current orders</h3>
      </div>
      <div className="settings-user-orders">
        <h3>Order History</h3>
      </div>
    </div>
  );
};

export default UserSettings;
