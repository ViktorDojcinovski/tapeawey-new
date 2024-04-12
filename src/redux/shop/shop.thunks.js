import {
  fetchShippingTypeStart,
  fetchShippingTypeSuccess,
} from "./shop.actions";

const fetchShippingTypes = () => async (dispatch) => {
  dispatch(fetchShippingTypeStart());
  // GET, POST, PUT, DELETE --> REST API methods --> 200, 201, 204...
  const response = await fetch("./data/shippingTypes.json");

  const data = await response.json();

  dispatch(fetchShippingTypeSuccess({ data }));
};

export { fetchShippingTypes };
