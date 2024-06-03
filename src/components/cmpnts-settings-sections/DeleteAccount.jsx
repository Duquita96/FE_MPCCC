import { useState, useContext } from "react";
import { UserContext } from '../../context/UserContextProvider.jsx';
import { FaRegTrashCan } from "react-icons/fa6";
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
            <button className="delBtn delBtnClr1 pointer" onClick={toggleDisplay}>
              <FaRegTrashCan size={14} />
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
