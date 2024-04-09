const catalogActionTypes = {
  SET_ACTIVE_ITEM: "SET_ACTIVE_ITEM",
  PRODUCTS_FETCHING_START: "PRODUCTS_FETCHING_START",
};

const setActiveItem = (id) => ({
  type: catalogActionTypes.SET_ACTIVE_ITEM,
  payload: id,
});

const productsFetchingStart = () => ({
  type: catalogActionTypes.PRODUCTS_FETCHING_START,
});

export { catalogActionTypes, setActiveItem, productsFetchingStart };
