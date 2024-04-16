import { cartActionTypes } from "./cart.actions";

// utils
// 1. check products contains --> whether products list already contains the product
//
const checkForProductContains = (products, productID) =>
  products.some((product) => product.id === productID);
// 2. increase product quantity --> add the selected quantity to the product
const increaseProductQuantity = (products, newProduct, quantity) =>
  products.map((product) =>
    product.id === newProduct.id
      ? {
          ...product,
          quantity: product.quantity + quantity,
        }
      : product
  );
// state = { products: [{}, {}], activeitem: {}} --> const { products } = state;
// 3. add product to cart
const addProductToCart = ({ products }, newProduct, quantity) => {
  if (products.length > 0) {
    // --> if products is empty array == false

    return checkForProductContains(products, newProduct.id)
      ? increaseProductQuantity(products, newProduct, quantity)
      : [...products, newProduct]; // --> [{}, {}, { "id": "3", "name": "Chicken with curry", "price": 10, ... }]
  }
  return [newProduct];
};

const initialState = {
  products: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        products: addProductToCart(
          // --> { products: [{ "id": "3", "name": "Chicken with curry", "price": 10, ... }, ...] },
          state,
          action.payload.product, // --> { "id": "3", "name": "Chicken with curry", "price": 10, ... }
          action.payload.quantity // --> 1, 2 ...
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
