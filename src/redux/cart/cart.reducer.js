import { cartActionTypes, addToCart } from "./cart.actions";

// utils
// 1. check products contains --> whether products list already contains the product
const checkProductsContains = (products, newProduct) => {
  const filteredProductsList = products.filter(
    (product) => product.id === newProduct.id
  );

  return filteredProductsList.length;
};
// 2. increase product quantity --> add the selected quantity to the product
const increaseProductQuantity = (products, newProduct, quantity) => {
  if (checkProductsContains(products, newProduct)) {
    // find the product and add the quantity
  } else {
    // add the product to the list
  }
};
// 3. add product to cart
const addProductToCart = ({ products }, newProduct, quantity) => {
  checkProductsContains(products, newProduct);
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
          state,
          action.payload.product,
          action.payload.quantity
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
