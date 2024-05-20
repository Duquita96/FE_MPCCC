import UserContext from "../../context/UserContext";
import axios from "axios";
import { useState, useContext } from "react";

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
      const token = localStorage.getItem("token");
      const headers = { "x-auth-token": token };
      axios
        .patch(
          "http://localhost:8000/api/v1/users/me",
          { email: newMail1 },
          { headers }
        )
        .then((res) => {
          userDispatch({type: "email", email: newMail1})
          cancel();
        });
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
        <button
          type="submit"
          className="modifyBtn pointer"
        >
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
