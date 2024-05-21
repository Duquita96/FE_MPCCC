import { useState } from "react";
import patchFunction from "../../utils/patch";

const PasswordForm = ({ cancel }) => {
  const [newPwd, setNewPwd] = useState("");
  const [newPwd2, setNewPwd2] = useState("");

  const changeHandler = (e) => {
    e.target.name === "newpwd"
      ? setNewPwd(e.target.value)
      : setNewPwd2(e.target.value);
  };

  const patchPassword = (e) => {
    e.preventDefault();
    if (newPwd !== newPwd2) {
      alert("Passwords do not match, please check!");
    } else {
      patchFunction({ password: newPwd });
      cancel();
    }
  };

  return (
    <div className="modbox">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={patchPassword}
      >
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
        <button className="modifyBtn pointer" type="submit">
          Update
        </button>
        <button className="modifyBtn pointer" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PasswordForm;
