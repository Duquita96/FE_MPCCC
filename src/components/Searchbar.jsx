import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContext } from "../context/HeaderContextProvider";
import axios from "axios";
import "../style/headerStyle.css";

const SearchBar = () => {

  window.onclick = function(e) {e.target.className !== "search-result-list" ? clear() : null};

  const [inputStr, setInputStr] = useState("");
  const { searchData, updateSearchData } = useContext(HeaderContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (searchData.length === 0) {
      axios
        .get("http://localhost:8000/api/v1/resources/list")
        .then((res) => {updateSearchData(res.data.data)})
        .catch((err) => console.log(err));
    }
  }, []);

  const handleChange = (e) => {setInputStr(e.target.value)};
  const clear = () => {setInputStr("")};

  const searchSelector = (e) => {
    const selectedId = e.target.id;
    const selectedCategory = e.target.innerText.split("|")[1].trim().toLowerCase();
    const selectedType = e.target.innerText.split("|")[0].toLowerCase();
  
    selectedId.length > 1
    ? navigate(`/${selectedCategory}/${selectedId}`) 
    : navigate(`/filter-page/${selectedType}`)

    clear();
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
        {searchData
          .filter((item) =>
            inputStr.toLowerCase() === ""
              ? ""
              : item.name.toLowerCase().includes(inputStr.toLowerCase())
          ).filter((item) =>
            inputStr.toLowerCase() === ""
              ? ""
              : item.name.toLowerCase().split(" ").some(item => item.startsWith(inputStr.toLowerCase()))
          )
          .map((item) => (
            <li key={item._id} id={item._id} onClick={searchSelector}>
              {item.name} | {item.productType.charAt(0).toUpperCase() + item.productType.slice(1)}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchBar;
