import "../../style/userSettings.css";

const UserInfo = () => {
  return (
    <>
      <div className="settings-user-info">
        <h3>Your information:</h3>
        <div className="userInfo">
            <div>Name:</div>
            <div>Surname: </div>
            <div>Email:</div>
            <div>Gender:</div>
            <div>Password: ****</div>
        </div>
        <div className="infoBtns">
          <button className="modifyBtn pointer">Change info</button>
          <button className="adminBtn pointer">Go to admin panel</button>
        </div>
      </div>
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

export default UserInfo;
