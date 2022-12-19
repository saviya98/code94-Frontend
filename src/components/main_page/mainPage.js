import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../api/api";
import { StoreAllProductDetails } from "../../store/actions";
import Header from "../header/header";
import ProductTable from "../productTable/productTable";
import "./mainpage.css";

export default function MainPage() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  let product = [];

  const getProductList = async () => {
    try {
      const dataSet = await getAllProducts();
      setProducts(dataSet);
      product.push(dataSet);
      console.log(product[0]);
      dispatch(StoreAllProductDetails(product[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="container">
      <Header value={"PRODUCTS"} isShow={false} />
      <div className="table-alingmets">
        <ProductTable/>
      </div>
    </div>
  );
}
