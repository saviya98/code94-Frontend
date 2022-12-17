import React from "react";
import ButtonM from "../button/button";
import FavButton from "../button/favButton";
import Searchbar from "../searchbar/searchbar";
import "./header.css";

export default function header({ value }) {
  const newProductBtnClick = () => {
    window.location = "/new-product";
  };
  return (
    <div className="container">
      <div className="admin-menu">
        ADMIN
        <div className="admin-img"></div>
      </div>
      <div className="topic">{value}</div>
      <div className="button-allingments">
        <div className="p-2 searchbar-allingment">
          <Searchbar />
        </div>
        <div className="p-2 button-space">
          <ButtonM
            value={"New Product"}
            onSubmit={() => newProductBtnClick()}
          />
        </div>
        <div className="p-2">
          <FavButton />
        </div>
      </div>
    </div>
  );
}
