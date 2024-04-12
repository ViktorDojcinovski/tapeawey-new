import { catalogActionTypes } from "./catalog.actions";

const initialState = {
  activeItem: null,
  categories: [],
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case catalogActionTypes.SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.payload,
      };
    case catalogActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};

export default catalogReducer;
