import React from "react";

import {
  QuantityBlock,
  QuantityIncrease,
  QuantityDecrease,
} from "./product-quantity.styles";

const ProductQuantity = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
  isDesktop,
  ...props
}) => (
  <QuantityBlock {...props} isDesktop={isDesktop}>
    <QuantityDecrease onClick={decreaseQuantity} />
    {quantity}
    <QuantityIncrease onClick={increaseQuantity} />
  </QuantityBlock>
);

export default ProductQuantity;
