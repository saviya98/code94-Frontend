export const StoreAllProductDetails = (value) => {
  return async (dispatch) => {
    console.log("value", value);
    dispatch({
      type: "STOREPRODUCTS",
      payload: value,
    });
  };
};

export const StoreFavourites = (value) => {
  return async (dispatch) => {
    console.log("value", value);
    dispatch({
      type: "FAVOURITES",
      payload: value,
    });
  };
};

export const StoreSearch = (value) => {
  return async (dispatch) => {
    console.log("value", value);
    dispatch({
      type: "SEARCH",
      payload: value,
    });
  };
};

export const showDeleteModal = (value) => {
    return (dispatch) => {
      dispatch({
        type: "DELETEMODAL",
        payload: value,
      });
    };
  };
  
