import { useState, useContext } from "react";
import UserContext from "../../context/UserContext";
import AddressForm from "./AddressForm";

const UserShipping = () => {

  const { userState } = useContext(UserContext);

  const [addBtn, setAddBtn] = useState(true);
  const [modify, setModify] = useState(false);

  const toggleModify = () => {setModify(true); setAddBtn(false)}
  const cancel = () => {setAddBtn(true); setModify(false)}

  return (
    <div className="settings-user-admin">
      <h3>Shipping addresses</h3>
      {addBtn && <button className="addBtn pointer" onClick={toggleModify}>+</button>}
      {userState.homeAddress?.street && <div>
          {userState.homeAddress.street + " - " 
          + userState.homeAddress.city + ", "
          + userState.homeAddress.country + " - HOME"
          }
        </div>}
        {userState.shippingAddress?.street && <div>
          {userState.shippingAddress.street + " - " 
          + userState.shippingAddress.city + ", "
          + userState.shippingAddress.country + " - SHIPPING"
          }
        </div>}
      {modify && <AddressForm cancel={cancel} />}
    </div>
  );
};

export default UserShipping;
