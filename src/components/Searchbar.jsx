import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/headerStyle.css";

const SearchBar = () => {
  const [inputStr, setInputStr] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDataType, setSearchDataType] = useState({});

  const updateSearchData = (array) => {
    setSearchData(array);
  };
  const updateSearchTypes = (obj) => {
    setSearchDataType(obj);
  };

  let searchObj = {
    Books: { type: "Category" },
    Games: { type: "Category" },
    PcParts: { type: "Category" },
    Tours: { type: "Category" },
  };

  useEffect(() => {
    if (searchData.length === 0) {
      axios
        .get("http://localhost:8000/api/v1/resources/list")
        .then((res) => {
          const fetchArray = res.data.data;
          console.log(fetchArray);
          fetchArray.forEach((obj) => {
            switch (obj.productType) {
              case "books":
                searchObj[obj.name] = { type: "Book", id: obj._id };
                break;
              case "video-games":
                searchObj[obj.name] = { type: "Games", id: obj._id };
                break;
              case "pc-parts":
                searchObj[obj.name] = { type: "PC Parts", id: obj._id };
                break;
              case "tours":
                searchObj[obj.name] = { type: "Tours", id: obj._id };
                break;
            }
          });
          updateSearchTypes(searchObj);
          updateSearchData(Object.keys(searchObj));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleChange = (e) => {setInputStr(e.target.value)};
  const clear = () => {setInputStr("")};

  // const navigate = useNavigate();
  // const moveTo = (url) => {navigate(url)};

  const searchSelector = (e) => {

    // const selectedId = e.target.id;
    // const selectedCategory = e.target.innerText.split("|")[0];

    // console.log(selectedId);
    // console.log(selectedCategory);

    // if (!selectedId) {
    //   if (selectedCategory === "Games") {moveTo("/filter-page/video-game")};
    //   if (selectedCategory === "Books") {moveTo("/filter-page/book")};
    //   if (selectedCategory === "PcParts") {moveTo("/filter-page/pc-part")};
    //   if (selectedCategory === "Tours") {moveTo("/filter-page/tours")};
    // }
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
              : item.toLowerCase().includes(inputStr.toLowerCase())
          )
          .map((item) => (
            <li key={item} id={searchDataType[item].id} onClick={searchSelector}>
              {item} | {searchDataType[item].type}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchBar;
