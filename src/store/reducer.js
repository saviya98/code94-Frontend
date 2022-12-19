const initialState = {
  products: [],
  _id: "639f2b0fde58942bc792727e",
  favourites: [],
  search: [],
  deleteModalState: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STOREPRODUCTS":
      return {
        ...state, //copy previous state
        products: action.payload,
      };
    case "FAVOURITES":
      return {
        ...state, //copy previous state
        favourites: action.payload,
      };
    case "SEARCH":
      return {
        ...state, //copy previous state
        search: action.payload,
      };
    case "DELETEMODAL": {
      return {
        ...state, //copy previous state
        deleteModalState: action.payload,
      };
    }

    default:
      return state;
  }
};
