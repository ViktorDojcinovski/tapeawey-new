import React from "react";

import {
  ItemWrap,
  ItemInfo,
  Name,
  Price,
  ProductQuantity,
} from "./cart-item.styles";

const CartItem = ({
  name,
  price,
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <ItemWrap>
    <ItemInfo>
      <Name title={name}>{name}</Name>
      <Price>{price} €</Price>
    </ItemInfo>

    <ProductQuantity
      quantity={quantity}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  </ItemWrap>
);

export default CartItem;
