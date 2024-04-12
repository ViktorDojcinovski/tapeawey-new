import { useSelector, useDispatch } from "react-redux";

import { addToCart } from "../redux/cart/cart.actions";
import {
  productsFetchingStart,
  setActiveItem,
} from "../redux/catalog/catalog.actions";

const categories = [
  {
    id: "1",
    name: "Pasta dishes",
    products: {
      items: [
        {
          id: "1",
          name: "Pasta with tomato sauce",
          price: 5,
          description: "Pasta with tomato sauce",
          image: "https://via.placeholder.com/150",
        },
        {
          id: "2",
          name: "Pasta with pesto",
          price: 5,
          description: "Pasta with pesto",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
  },
  {
    id: "2",
    name: "Meat dishes",
    products: {
      items: [
        {
          id: "3",
          name: "Chicken with curry",
          price: 10,
          description: "Chicken with curry",
          image: "https://via.placeholder.com/150",
        },
        {
          id: "4",
          name: "Chicken with lemon",
          price: 10,
          description: "Chicken with lemon",
          image: "https://via.placeholder.com/150",
        },
      ],
    },
  },
];

export const selectProduct = (categories, activeProductId) =>
  categories
    ? categories
        .flatMap((category) => category.products.items)
        .filter(({ id }) => id === activeProductId)[0]
    : null;

const withProductLogic = (WrappedComponent) => () => {
  const productId = useSelector((state) => state.catalog.activeProduct);
  // const categories = useSelector((state) => state.catalog.categories);
  const product = selectProduct(categories, productId);
  const dispatch = useDispatch();

  const toCart = ({ product, quantity }) =>
    dispatch(addToCart({ product, quantity }));

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
