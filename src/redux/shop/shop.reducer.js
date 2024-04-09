import { shippingTypeActionTypes } from "./shop.actions";

const initialState = {
  loading: false,
  shippingTypes: null,
  selectedShippingType: null,
  selectedShippingArea: null,
  selectedShippingDate: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case shippingTypeActionTypes.FETCH_SHIPPING_TYPE_START:
      return {
        ...state,
        loading: true,
      }; // --> return object === state
    case shippingTypeActionTypes.FETCH_SHIPPING_TYPE_SUCCESS:
      return {
        ...state,
        shippingTypes: action.payload,
        loading: false,
      };
    case shippingTypeActionTypes.FETCH_SHIPPING_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case shippingTypeActionTypes.SET_SHIPPING_TYPE:
      return {
        ...state,
        selectedShippingType: action.payload,
      };
    case shippingTypeActionTypes.SET_SHIPPING_AREA:
      return {
        ...state,
        selectedShippingArea: action.payload,
      };
    case shippingTypeActionTypes.SET_SHIPPING_DATE:
      return {
        ...state,
        selectedShippingDate: action.payload,
      };
    default:
      return initialState;
  }
};

export default reducer;
