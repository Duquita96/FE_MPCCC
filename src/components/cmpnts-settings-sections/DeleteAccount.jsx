import { useState, useContext } from "react";
import { UserContext } from '../../context/UserContextProvider.jsx';
import axios from "axios";

const DeleteAccount = () => {

  const { resetUser } = useContext(UserContext);
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(display ? false : true);
  };

  const deleteUser = () => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    axios
      .delete("http://localhost:8000/api/v1/users/me", { headers })
      .then((res) => {
        console.log(res.data);
        resetUser();
      });
  };

  return (
    <>
      <div className="settings-user-delete">
        <div className="delBox">
          <h3>Delete Account</h3>
          {!display && (
            <button className="setting-del-btn pointer" onClick={toggleDisplay}>
              Delete
            </button>
          )}
        </div>
        {display && (
          <div className="delConfirm">
            <p>Are you sure?</p>
            <button className="confirmBtn pointer" onClick={deleteUser}>DELETE</button>
            <button className="confirmBtn pointer" onClick={toggleDisplay}>CANCEL</button>
          </div>
        )}
      </div>
    </>
  );
};

export default DeleteAccount;
