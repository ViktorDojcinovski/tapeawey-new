const shippingTypeActionTypes = {
  FETCH_SHIPPING_TYPE_START: "FETCH_SHIPPING_TYPE_START",
  FETCH_SHIPPING_TYPE_SUCCESS: "FETCH_SHIPPING_TYPE_SUCCESS",
  FETCH_SHIPPING_TYPE_FAILURE: "FETCH_SHIPPING_TYPE_FAILURE",
  SET_SHIPPING_TYPE: "SET_SHIPPING_TYPE",
  SET_SHIPPING_AREA: "SET_SHIPPING_AREA",
  SET_SHIPPING_DATE: "SET_SHIPPING_DATE",
};

const fetchShippingTypeStart = () => ({
  type: shippingTypeActionTypes.FETCH_SHIPPING_TYPE_START,
});

const fetchShippingTypeSuccess = ({ data }) => ({
  type: shippingTypeActionTypes.FETCH_SHIPPING_TYPE_SUCCESS,
  payload: data,
});

const fetchShippingTypeFailure = () => ({
  type: shippingTypeActionTypes.FETCH_SHIPPING_TYPE_FAILURE,
});

const setShippingTypeRedux = (value) => ({
  type: shippingTypeActionTypes.SET_SHIPPING_TYPE,
  payload: value,
});

const setShippingArea = (value) => ({
  type: shippingTypeActionTypes.SET_SHIPPING_AREA,
  payload: value,
});

const setShippingDate = (value) => ({
  type: shippingTypeActionTypes.SET_SHIPPING_DATE,
  payload: value,
});

export {
  shippingTypeActionTypes,
  fetchShippingTypeStart,
  fetchShippingTypeSuccess,
  fetchShippingTypeFailure,
  setShippingTypeRedux,
  setShippingArea,
  setShippingDate,
};
