import UserContext from "../../context/UserContext";
import { useState, useContext } from "react";
import patchFunction from "../../utils/patch";

const EmailForm = ({ cancel }) => {
  
  const { userDispatch } = useContext(UserContext);

  const [newMail1, setNewMail1] = useState("");
  const [newMail2, setNewMail2] = useState("");

  const changeHandler = (e) => {
    e.target.name === "newmail"
      ? setNewMail1(e.target.value)
      : setNewMail2(e.target.value);
  };

  const patchEmail = (e) => {
    e.preventDefault();
    if (newMail1 !== newMail2) {
      alert("Emails do not match, please check!");
    } else {
      patchFunction({ email: newMail1 });
      userDispatch({ type: "email", email: newMail1 });
      cancel();
    }
  };

  return (
    <div className="modbox">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={patchEmail}
      >
        <input
          type="email"
          placeholder="new email"
          className="formInput"
          name="newmail"
          value={newMail1}
          onChange={changeHandler}
          required
        />
        <input
          type="email"
          placeholder="confirm new email"
          className="formInput"
          name="newmail2"
          value={newMail2}
          onChange={changeHandler}
          required
        />
        <button type="submit" className="modifyBtn pointer">
          Update
        </button>
        <button className="modifyBtn pointer" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
