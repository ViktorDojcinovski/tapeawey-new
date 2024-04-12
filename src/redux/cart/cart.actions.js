const cartActionTypes = {
  ADD_TO_CART: "ADD_TO_CART",
};

const addToCart = ({ product, quantity }) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: {
    product,
    quantity,
  },
});

export { cartActionTypes, addToCart };
