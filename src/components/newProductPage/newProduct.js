import React from "react";
import Header from "../header/header";
import "./newProduct.css";

export default function newProduct() {
  return (
    <div className="container">
      <Header
        value={"PRODUCTS"}
        isShow={true}
        secondValue={"Add new product"}
      />
      <div className="form-allingments">
        <div class="mb-3 row">
          <label for="inputSKU" class="col-sm-2 col-form-label">
            SKU
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputSKU" />
          </div>
        </div>
        <div class="mb-3 d-flex flex-row">
          <label for="inputName" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName" />
          </div>
          <label for="inputQTY" class="col-sm-2 col-form-label ms-5">
            QTY
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputQTY" />
          </div>
        </div>
        <div class="mb-3">
          <label for="inputDescription" class="form-label">
            Product Description
          </label>
          <br/>
          <small>A small description about the product</small>
          <textarea
            class="form-control"
            id="inputDescription"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
