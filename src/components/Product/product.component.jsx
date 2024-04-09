import React, { useState } from "react";

import {
  Wrapper,
  ImageWrapper,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductControlsWrap,
  AddToCartButton,
  BackButton,
} from "./product.styles";
import withProductLogic from "../../hocs/withProductLogic";
import ProductQuantity from "./product-quantity/product-quantity.component";

const Product = ({ toCart, history, product, setProductActive }) => {
  const { name, description, price, image } = product || {};
  const [quantity, setQuantity] = useState(1);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src="" alt={name} />
      </ImageWrapper>
      <ProductName>{name}</ProductName>
      <ProductDescription>{description}</ProductDescription>
      <ProductPrice>{price} €</ProductPrice>

      <ProductQuantity
        quantity={quantity}
        increaseQuantity={() => setQuantity(quantity + 1)}
        decreaseQuantity={() =>
          setQuantity(quantity > 1 ? quantity - 1 : quantity)
        }
      />

      <ProductControlsWrap>
        <BackButton onClick={() => setProductActive(null)} theme="light">
          Cancel
        </BackButton>
        <AddToCartButton
          onClick={() => {
            toCart({
              ...product,
              quantity,
            });
            setProductActive(null);
          }}
        >
          Add to Cart
        </AddToCartButton>
      </ProductControlsWrap>
    </Wrapper>
  );
};

export default withProductLogic(Product);
