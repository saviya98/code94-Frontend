import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addNewProduct } from "../../api/api";
import Button from "../button/button";
import Header from "../header/header";
import "./newProduct.css";

export default function NewProduct() {
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const userId = useSelector((state) => state.AuthReducer._id);

  const handleImages = (e) => {
    console.log(e.target.files);
    setImages(e.target.files);
  };

  const handleOnSubmit = async () => {
    const productData = new FormData();
    for (let i = 0; i < images.length; i++) {
      productData.append("files", images[i]);
    }
    productData.append("sku", sku);
    productData.append("qty", qty);
    productData.append("name", name);
    productData.append("description", description);
    productData.append("userId",userId);
     await addNewProduct(productData);
  };

  return (
    <div className="container">
      <Header
        value={"PRODUCTS"}
        isShow={true}
        secondValue={"Add new product"}
      />
      <div className="form-allingments">
        <div className="mb-3 row">
          <label htmlFor="inputSKU" className="col-sm-2 col-form-label">
            SKU
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputSKU"
              name="inputSKU"
              onChange={(e) => setSku(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="inputName"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="inputQTY" className="col-sm-2 col-form-label ms-5">
            QTY
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputQTY"
              name="inputQTY"
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputDescription" className="form-label">
            Product Description
          </label>
          <br />
          <small>A small description about the product</small>
          <textarea
            className="form-control"
            id="inputDescription"
            rows="3"
            name="inputDescription"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3 d-flex flex-row">
          <label htmlFor="inputImages" className="col-sm-4 col-form-label">
            Product Images
          </label>
          <div className="col-sm-8">
            <input
              type="file"
              id="inputName"
              multiple
              onChange={(e) => handleImages(e)}
            />
          </div>
        </div>
        <small>JPEG, PNG, SVG or GIF</small>
        <br />
        <small>(Maximim file size 50MB)</small>
        <div className="float-end">
          <Button value={"Add Product"} onSubmit={() => handleOnSubmit()} />
        </div>
      </div>
    </div>
  );
}
