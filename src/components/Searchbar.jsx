import { useState } from "react";
import "../style/headerStyle.css";
import dataObj from "./data/searchData.js";

const SearchBar = () => {
  const items = Object.keys(dataObj);
  const [inputStr, setInputStr] = useState("");

  const handleChange = (e) => {
    setInputStr(e.target.value);
  };
  const clear = () => {
    setInputStr("");
  };

  const searchSelector = (e) => {
    const selectedSearch = e.target.innerText.split("|");
    const searchInput = selectedSearch[0].toLowerCase();
    const searchType = selectedSearch[1].toLowerCase();

    // Add fetching info where needed
    // Add redirecting of user based on selection
  };

  return (
    <>
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
      <ul className="search-result-list">
        {items
          .filter((item) =>
            inputStr.toLowerCase() === ""
              ? ""
              : item.toLowerCase().includes(inputStr.toLowerCase())
          )
          .map((item) => (
            <li key={item} onClick={searchSelector}>
              {item} |<span className="searchType">{dataObj[item].type}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchBar;
