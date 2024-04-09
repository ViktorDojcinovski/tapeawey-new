import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../redux/cart/cart.actions";
import {
  productsFetchingStart,
  setActiveItem,
} from "../redux/catalog/catalog.actions";

// withProductLogic(Component)

const withProductLogic = (WrappedComponent) => () => {
  const product = useSelector((state) => state.catalog.activeProduct);
  const dispatch = useDispatch();

  const toCart = () => dispatch(addToCart(product));
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
