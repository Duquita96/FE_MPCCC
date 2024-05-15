import axios from "axios";
import { useState } from "react";

const PasswordForm = ({cancel}) => {

  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newPwd2, setNewPwd2] = useState("");

  const changeHandler = (e) => {
    e.target.name === "oldpwd" ? setOldPwd(e.target.value) :
      e.target.name === "newpwd" ? setNewPwd (e.target.value) :
      setNewPwd2(e.target.value)
  }

    return (
        <div className="modbox">
          <input
            type="password"
            placeholder="current password"
            className="formInput"
            name="oldpwd"
            value={oldPwd}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="new password"
            className="formInput"
            name="newpwd"
            value={newPwd}
            onChange={changeHandler}
          />
          <input
            type="password"
            placeholder="confirm new password"
            className="formInput"
            name="newpwd2"
            value={newPwd2}
            onChange={changeHandler}
          />
          <button className="modifyBtn pointer">Update</button>
          <button className="modifyBtn pointer" onClick={cancel}>Cancel</button>
        </div>
      );
}

export default PasswordForm;