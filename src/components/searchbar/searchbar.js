import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { searchProducts } from "../../api/api";
import { StoreSearch } from "../../store/actions";
// import { useHistory } from "react-router";
import "./searchbar.css";

export default function Searchbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const HandleSubmit = async () => {
    console.log(searchValue);
    const response = await searchProducts(searchValue);
    console.log("SEAR", response);
    dispatch(StoreSearch(response));
    navigate("/search-results");
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products"
          id="searchValue"
          name="searchValue"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit" onClick={HandleSubmit}>
          <img src="../../assets/saerch.png" />
          Search
        </button>
      </div>
    </div>
  );
}
