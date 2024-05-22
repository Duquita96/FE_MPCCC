import { useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/UserContext";
import AddressForm from "./AddressForm";

const UserShipping = () => {
  const { userState, userDispatch } = useContext(UserContext);

  const [addBtn, setAddBtn] = useState(true);
  const [modify, setModify] = useState(false);

  const toggleModify = () => {
    setModify(true);
    setAddBtn(false);
  };
  const cancel = () => {
    setAddBtn(true);
    setModify(false);
  };

  const delAddress = (e) => {
    const token = localStorage.getItem("token");
    const headers = { "x-auth-token": token };
    if (e.target.id === "homeDel") {
      axios
        .patch(
          "http://localhost:8000/api/v1/users/me",
          { homeAddress: { street: "", city: "", country: "" } },
          { headers }
        )
        .then((res) => {
          userDispatch({
            type: "home",
            homeAddress: { street: "", city: "", country: "" },
          });
          console.log(res);
        });
    }
  };

  return (
    <div className="settings-user-admin">
      <h3>Shipping addresses</h3>
      {addBtn && (
        <button className="addBtn pointer" onClick={toggleModify}>
          +
        </button>
      )}
      {userState.homeAddress?.street && (
        <div className="address homeAddress">
          {userState.homeAddress.street +
            " - " +
            userState.homeAddress.city +
            ", " +
            userState.homeAddress.country}
          <div className="home">Home</div>
          <button
            className="setting-del-btn pointer"
            id="homeDel"
            onClick={delAddress}
          >
            Delete
          </button>
        </div>
      )}
      {userState.shippingAddress?.street && (
        <div className="address shippingAddress">
          {userState.shippingAddress.street +
            " - " +
            userState.shippingAddress.city +
            ", " +
            userState.shippingAddress.country}
          <button
            className="setting-del-btn pointer"
            id="shipDel"
            onClick={delAddress}
          >
            Delete
          </button>
        </div>
      )}
      {modify && <AddressForm cancel={cancel} />}
    </div>
  );
};

export default UserShipping;
