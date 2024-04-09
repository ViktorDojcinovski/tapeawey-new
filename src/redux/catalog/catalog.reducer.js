import { catalogActionTypes } from "./catalog.actions";

const initialState = {
  activeItem: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case catalogActionTypes.SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: action.payload,
      };

    default:
      return state;
  }
};

export default catalogReducer;
