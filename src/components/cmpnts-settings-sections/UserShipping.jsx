import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContextProvider.jsx";
import AddressForm from "./AddressForm";
import patchFunction from "../../utils/patch";
import axios from "axios";

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
    if (e.target.id === "homeDel") {
      patchFunction({ homeAddress: { street: "", city: "", country: "" } });
      userDispatch({
        type: "home",
        homeAddress: { street: "", city: "", country: "" },
      });
    } else {
      patchFunction({ shippingAddress: { street: "", city: "", country: "" } });
      userDispatch({
        type: "shipping",
        shippingAddress: { street: "", city: "", country: "" }
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
