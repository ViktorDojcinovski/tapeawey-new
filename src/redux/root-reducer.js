import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import catalogReducer from "./catalog/catalog.reducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  catalog: catalogReducer,
  cart: cartReducer,
});

export default rootReducer;
