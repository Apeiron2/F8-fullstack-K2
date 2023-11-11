import { Cookie } from "../helper/cookie";
const initialState = {
  email: Cookie.get("email"),
  isLoading: false,
  products: [],
  cart: JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};
const reducer = (state, action = {}) => {
  switch (action.type) {
    case "login": {
      return { ...state, email: action.payload };
    }
    case "loading": {
      return { ...state, isLoading: action.payload };
    }
    case "get-products": {
      return { ...state, products: action.payload };
    }
    case "cart/new": {
    }
    case "cart/update": {
      return { ...state, cart: action.payload };
    }
    default:
      return state;
  }
};
export { initialState, reducer };
