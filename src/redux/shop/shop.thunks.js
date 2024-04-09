import {
  fetchShippingTypeStart,
  fetchShippingTypeSuccess,
} from "./shop.actions";

const fetchShippingTypes = () => async (dispatch) => {
  dispatch(fetchShippingTypeStart());

  const response = await fetch("./data/shippingTypes.json");
  const data = await response.json();

  dispatch(fetchShippingTypeSuccess({ data }));
};

export { fetchShippingTypes };
