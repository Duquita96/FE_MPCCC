import { UserContext } from '../../context/UserContextProvider.jsx';
import { useState, useContext } from "react";
import patchFunction from "../../utils/patch";


const AddressForm = ({ cancel }) => {
  const { userDispatch } = useContext(UserContext);

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("home");

  const changeHandler = (e) => {
    e.target.name === "street"
      ? setStreet(e.target.value)
      : e.target.name === "city"
      ? setCity(e.target.value)
      : setCountry(e.target.value);
  };

  const changeType = (e) => {setType(e.target.value)};

  const patchAddress = (e) => {
    e.preventDefault();
    const patchObj =
      type === "home"
        ? { homeAddress: { street, city, country } }
        : { shippingAddress: { street, city, country } };

    patchFunction(patchObj);

    type === "home"
     ? userDispatch({type: "home", homeAddress: { street, city, country }})
     : userDispatch({ type: "shipping", shippingAddress: { street, city, country }});
    
    cancel();
  };

  return (
    <div className="modbox">
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={patchAddress}
      >
        <input
          type="text"
          placeholder="street + number"
          className="formInput"
          name="street"
          value={street}
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          placeholder="city"
          className="formInput"
          name="city"
          value={city}
          onChange={changeHandler}
          required
        />
        <input
          type="text"
          placeholder="country"
          className="formInput"
          name="country"
          value={country}
          onChange={changeHandler}
          required
        />
        <select name="type" id="address-type" onChange={changeType}>
          <option value="home">Home Address</option>
          <option value="shipping">Shipping Address</option>
        </select>
        <button type="submit" className="modifyBtn pointer">
          Add
        </button>
        <button className="modifyBtn pointer" onClick={cancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
