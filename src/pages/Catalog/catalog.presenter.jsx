import Product from "../../components/Product/product.component";
import Cart from "../../components/Cart/cart.component";
import {
  PageWrapper,
  CategoryPicker,
  PickerScrollMiddleWrap,
  PickerScrollBottomWrap,
  CategoryItem,
  ProductsWrap,
  ProductWrapper,
  CategoryTitle,
  DishWrapper,
  Dish,
} from "./catalog.styles";

const CatalogPresenter = ({
  hasActiveProduct,
  categories,
  products,
  onClickHandler,
}) => {
  const orderTotalPrice = 15;
  const deliveryPrice = 5;
  const cartTotalPrice = orderTotalPrice + deliveryPrice;
  const cartTotalQuantity = 1;

  return (
    <>
      {hasActiveProduct && (
        <ProductWrapper>
          <Product />
        </ProductWrapper>
      )}
      <PageWrapper>
        <CategoryPicker>
          <PickerScrollMiddleWrap>
            <PickerScrollBottomWrap>
              {categories.map((category) => {
                return (
                  <div key={category.id}>
                    <CategoryItem>{category.name}</CategoryItem>
                  </div>
                );
              })}
            </PickerScrollBottomWrap>
          </PickerScrollMiddleWrap>
        </CategoryPicker>

        <ProductsWrap>
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <CategoryTitle>{category.name}</CategoryTitle>
                <DishWrapper>
                  {category.products.items.map((item) => {
                    return (
                      <div key={item.id}>
                        <Dish onClick={() => onClickHandler(item.id)}>
                          <p>{item.name}</p>
                          <p>{item.description}</p>
                          <p>{item.price} eur</p>
                        </Dish>
                      </div>
                    );
                  })}
                </DishWrapper>
              </div>
            );
          })}
        </ProductsWrap>
        <Cart
          cartProducts={products}
          cartTotalPrice={cartTotalPrice}
          orderTotalPrice={orderTotalPrice}
          deliveryPrice={deliveryPrice}
          cartTotalQuantity={cartTotalQuantity}
        />
      </PageWrapper>
    </>
  );
};

export default CatalogPresenter;
