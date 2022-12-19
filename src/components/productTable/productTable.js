import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeletePopup from "../deletePopUp/deletePopup";
import "./productTable.css";
import { deleteProduct } from "../../api/api";
import { showDeleteModal } from "../../store/actions";

export default function ProductTable() {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const dataArray = useSelector((state) => state.AuthReducer.products);
  console.log("DATASET", dataArray);
  const handleIconClick = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "favicon":
        window.location = "./favourite-products";
        break;
      case "deleteicon":
        // window.location = '';
        
        break;
      case "editicon":
        window.location = "./new-product";
        break;
    }
  };

  const handleDelete = async(id) => {
    <DeletePopup isShow={true}/>
    dispatch(showDeleteModal(true));
    console.log("USERID", id);
    const response = await deleteProduct(id);
  };
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SKU</th>
            <th scope="col">IMAGE</th>
            <th scope="col">PRODUCT NAME</th>
            <th scope="col">PRICE</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {dataArray.length == 0 ? (
            <div>
              <h5>No data</h5>
            </div>
          ) : (
            dataArray.data.map((item) => (
              <tr key={item._id}>
                <td scope="row">{item.sku}</td>
                <td>
                  <img
                    src={`http://localhost:5000/${item.imagesArray[0].filePath}`}
                    width={66}
                    height={66}
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.qty}</td>
                <td>
                  <div className="icon-group">
                    <i
                      className="icon-delete"
                      id="deleteicon"
                      onClick={() => handleDelete(item._id)}
                    ></i>
                    <i
                      className="icon-edit"
                      id="editicon"
                      onClick={handleIconClick}
                    ></i>
                    {!isFav ? (
                      <i
                        className="icon-fav"
                        onClick={handleIconClick}
                        id="favicon"
                      ></i>
                    ) : (
                      <i
                        className="icon-fav-clicked"
                        onClick={handleIconClick}
                        id="favicon"
                      ></i>
                    )}
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
