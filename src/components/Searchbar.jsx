import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/headerStyle.css";

const SearchBar = () => {
  const [inputStr, setInputStr] = useState("");
  const [searchData, setSearchData] = useState([]);

  const navigate = useNavigate();

  const updateSearchData = (array) => {setSearchData(array)};

  useEffect(() => {
    if (searchData.length === 0) {
      axios
        .get("http://localhost:8000/api/v1/resources/list")
        .then((res) => {
          const fetchArray = res.data.data;
          fetchArray.push({_id: 1, name: 'Video-games', productType: "category"});
          fetchArray.push({_id: 2, name: 'Books', productType: "category"});
          fetchArray.push({_id: 3, name: 'Pc Parts', productType: "category"});
          fetchArray.push({_id: 4, name: 'Tours', productType: "category"});
          updateSearchData(fetchArray);
        })
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
