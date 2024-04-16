import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  PageWrap,
  Header,
  ControlsWrap,
  CartItemsWrap,
  TotalDetails,
  TotalDetailsRow,
  CartTotalWrap,
  GoToCheckout,
  EmptyCardWrapper,
} from "./cart.styles";
import CartItem from "./cart-item/cart-item.component";

const CartPage = ({
  history,
  cartTotalPrice,
  orderTotalPrice,
  deliveryPrice,
  cartProducts,
  increaseQuantity,
  decreaseQuantity,
}) => {
  let location = useLocation();
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  const conditionallyDecreaseQuantity = (product, location) => {
    // if (cartTotalQuantity > 1 || location === "/catalog") {
    //   decreaseQuantity(product);
    // }
  };
  // [1, 3, 4, 5] --> reduce((agg, item) => agg + item, 0)
  useEffect(() => {
    if (cartProducts) {
      const cartTotalQuantity = cartProducts.reduce((agg, product) => {
        return agg + product.price;
      }, 0);
      console.log("cartTotalQuantity", cartTotalQuantity);
      setCartTotalQuantity(cartTotalQuantity);
    }
  }, [cartProducts]);

  return (
    <PageWrap
      style={{
        marginTop: location.pathname === "/catalog" ? "-200px" : null,
        marginLeft: location.pathname === "/catalog" ? "10px" : "90px",
      }}
    >
      {cartTotalQuantity ? (
        <>
          {location.pathname === "/catalog" ? (
            <>
              <GoToCheckout onClick={() => history.push("/checkout")}>
                Go to cart
              </GoToCheckout>
            </>
          ) : (
            <Header>Cart</Header>
          )}

          <CartItemsWrap>
            {cartProducts
              ? cartProducts.map((product) => (
                  <CartItem
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    increaseQuantity={() => increaseQuantity(product, 1)}
                    decreaseQuantity={() =>
                      conditionallyDecreaseQuantity(product, location.pathname)
                    }
                  />
                ))
              : ""}
          </CartItemsWrap>

          <TotalDetails>
            <TotalDetailsRow>
              <span className="title">Order</span>
              <span>{cartTotalPrice} €</span>
            </TotalDetailsRow>
            <TotalDetailsRow>
              <span className="title">Delivery</span>
              <span>{deliveryPrice} €</span>
            </TotalDetailsRow>
          </TotalDetails>

          <ControlsWrap>
            <CartTotalWrap>
              <span>Total</span>
              <span className="thin">{orderTotalPrice} €</span>
            </CartTotalWrap>
          </ControlsWrap>
        </>
      ) : (
        <EmptyCardWrapper>
          <p>Your cart is currently empty</p>
        </EmptyCardWrapper>
      )}
    </PageWrap>
  );
};

export default CartPage;
