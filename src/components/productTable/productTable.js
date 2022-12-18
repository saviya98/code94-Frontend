import React, { useState } from "react";
import DeletePopup from "../deletePopUp/deletePopup";
import "./productTable.css";

export default function ProductTable() {
    const [isFav,setIsFav] = useState(false);
  const handleIconClick = (e) => {
    console.log(e.target.id);
    switch (e.target.id) {
      case "favicon":
        window.location = "./favourite-products";
        break;
      case "deleteicon":
        // window.location = '';
        <DeletePopup />
        break;
      case "editicon":
        window.location = './new-product';
        break;
    }
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
          <tr>
            <td scope="row">#1234</td>
            <td><img src="../../assets/product-img.png" width={66} height={66}/></td>
            <td>Book</td>
            <td>$</td>
            <td>
              <div className="icon-group">
                <i
                  className="icon-delete"
                  id="deleteicon"
                  onClick={handleIconClick}
                ></i>
                <i
                  className="icon-edit"
                  id="editicon"
                  onClick={handleIconClick}
                ></i>
                {!isFav ?(<i
                  className="icon-fav"
                  onClick={handleIconClick}
                  id="favicon"
                ></i>):(<i
                    className="icon-fav-clicked"
                    onClick={handleIconClick}
                    id="favicon"
                  ></i>)}
                
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
