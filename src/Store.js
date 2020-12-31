import { createStore } from "redux";
import BasketReducer from "./BasketReducer";

const store = createStore(
  BasketReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
