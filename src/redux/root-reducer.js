import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import catalogReducer from "./catalog/catalog.reducer";

const rootReducer = combineReducers({
  shop: shopReducer,
  catalog: catalogReducer,
});

export default rootReducer;
