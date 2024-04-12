import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./catalog.actions";

const fetchCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  const response = await fetch("./data/categories.json");
  const data = await response.json();

  dispatch(fetchCategoriesSuccess(data));
};

export { fetchCategories };
