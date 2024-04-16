import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CatalogPresenter from "./catalog.presenter";
import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import { setActiveItem } from "../../redux/catalog/catalog.actions";
import { fetchCategories } from "../../redux/catalog/catalog.thunks";

const Catalog = () => {
  const hasActiveProduct = useSelector((state) => state.catalog.activeItem);
  const dispatch = useDispatch();
  const onClickHandler = (id) => {
    dispatch(setActiveItem(id));
  };
  const categories = useSelector((state) => state.catalog.categories);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    if (products) {
      dispatch(fetchCategories());
    }
  }, [dispatch, products]);

  return (
    <CatalogPresenter
      hasActiveProduct={hasActiveProduct}
      categories={categories}
      products={products}
      onClickHandler={onClickHandler}
    />
  );
};

export default withHeaderAndFooter(Catalog);
