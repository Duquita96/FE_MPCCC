import { useState } from "react";
import "../style/headerStyle.css";
import dataObj from "./data/searchData.js"

const MainHeader = () => {
  const items = Object.keys(dataObj);
  const [inputStr, setInputStr] = useState("");

  const handleChange = (e) => {
    setInputStr(e.target.value);
  };
  const clear = () => {
    setInputStr("");
  };

  return (
    <div className="main-header headers">
      <div className="box-cart-login">logo</div>
      <div className="box-cart-login">user</div>
      <div className="searchbardiv">
        <form action="">
          <input
            className="searchbar"
            type="search"
            placeholder="What are you looking for?"
            onFocus={clear}
            onChange={handleChange}
            value={inputStr}
          />
        </form>
      </div>
      <div className="box-cart-login">cart</div>
      <div className="box-cart-login">login</div>
      <div className="search-result">
        {items
          .filter((item) => {
            return inputStr.toLowerCase() === ""
              ? ""
              : item.toLowerCase().includes(inputStr.toLowerCase());
          })
          .map((item, key) => {
            return (
              <li key={key}>
                {item} <span className="searchType">{dataObj[item].type}</span>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default MainHeader;
