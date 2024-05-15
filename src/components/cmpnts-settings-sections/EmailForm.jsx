import axios from "axios";
import { useState } from "react";

const EmailForm = ({cancel}) => {

  const [newMail1, setNewMail1] = useState("");
  const [newMail2, setNewMail2] = useState("");

  const changeHandler = (e) => {
    e.target.name === "newmail" ? setNewMail1(e.target.value) :
      setNewMail2(e.target.value)
  }

  const patchEmail = () => {
    // add patch
  }


  return (
    <div className="modbox">
      <input
        type="email"
        placeholder="new email"
        className="formInput"
        name="newmail"
        value={newMail1}
        onChange={changeHandler}
      />
      <input
        type="email"
        placeholder="confirm new email"
        className="formInput"
        name="newmail2"
        value={newMail2}
        onChange={changeHandler}
      />
      <button className="modifyBtn pointer" onClick={patchEmail}>Update</button>
      <button className="modifyBtn pointer" onClick={cancel}>Cancel</button>
    </div>
  );
};

export default EmailForm;
