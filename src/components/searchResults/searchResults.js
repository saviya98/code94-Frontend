import React from "react";
import { useSelector } from "react-redux";
import Header from "../header/header";
import "./searchResults.css";

export default function SearchResults() {
  const searchData = useSelector((state) => state.AuthReducer.search);
  console.log("SEARRES", searchData);
  return (
    <div>
      <Header value={"PRODUCTS"} isShow={false} />
      <div className="container-alling">
        <div>
          <p>{searchData.length} results found for 'Books'</p>
        </div>
        {searchData.map((item) => (
          <div className="list-group list-group-flush custom-list">
            <a
              href="#"
              className="list-group-item list-group-item-action"
              aria-current="true"
            >
              <div className="d-flex w-100 justify-content-between">
                <h6 className="mb-1">{item.sku}</h6>
              </div>
              <div className="d-flex w-100 justify-content-between">
                <p className="mb-1">{item.name}</p>
                <i className="icon-arrow"></i>
              </div>
              <small>{item.description}</small>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
