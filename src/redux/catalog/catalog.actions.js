const catalogActionTypes = {
  SET_ACTIVE_ITEM: "SET_ACTIVE_ITEM",
  PRODUCTS_FETCHING_START: "PRODUCTS_FETCHING_START",
  FETCH_CATEGORIES_START: "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
};

const setActiveItem = (id) => ({
  type: catalogActionTypes.SET_ACTIVE_ITEM,
  payload: id,
});

const productsFetchingStart = () => ({
  type: catalogActionTypes.PRODUCTS_FETCHING_START,
});

const fetchCategoriesStart = () => ({
  type: catalogActionTypes.FETCH_CATEGORIES_START,
});

const fetchCategoriesSuccess = (data) => ({
  type: catalogActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: data,
});

export {
  catalogActionTypes,
  setActiveItem,
  productsFetchingStart,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
};
