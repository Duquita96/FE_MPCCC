import UserContext from "../../context/UserContext";
import axios from "axios";
import { useState, useContext } from "react";

const GenderForm = ({ cancel }) => {
  const { userDispatch } = useContext(UserContext);
  const [gen, setGen] = useState("");

  const changeGender = (e) => {setGen(e.target.value)};

  const patchGender = (e) => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    axios
      .patch(
        "http://localhost:8000/api/v1/users/me",
        { gender: gen },
        { headers }
      )
      .then((res) => {
        console.log(res.data);
        userDispatch({ type: "gender", gender: gen });
        cancel();
      });
  };

  return (
    <div className="modbox">
      <select name="genders" id="gender-select" onChange={changeGender}>
        <option value="">Please select your gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <button className="modifyBtn pointer" onClick={patchGender}>
        Update
      </button>
      <button className="modifyBtn pointer" onClick={cancel}>
        Cancel
      </button>
    </div>
  );
};

export default GenderForm;
