import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../redux/cart/cart.actions";
import {
  productsFetchingStart,
  setActiveItem,
} from "../redux/catalog/catalog.actions";

export const selectProduct = (categories, activeProductId) =>
  categories
    ? categories
        .flatMap((category) => category.products.items)
        .filter(({ id }) => id === activeProductId)[0]
    : null;

const withProductLogic = (WrappedComponent) => () => {
  const productId = useSelector((state) => state.catalog.activeItem);
  const categories = useSelector((state) => state.catalog.categories);
  const product = selectProduct(categories, productId);
  const dispatch = useDispatch();

  const toCart = ({ product, quantity }) => {
    dispatch(addToCart({ product, quantity }));
  };

  const productsFetchStart = () => dispatch(productsFetchingStart());
  const setProductActive = (id) => dispatch(setActiveItem(id));

  const props = {
    product,
    toCart,
    productsFetchStart,
    setProductActive,
  };

  return <WrappedComponent {...props} />;
};

export default withProductLogic;
