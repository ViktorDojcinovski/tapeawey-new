import Product from "../../components/Product/product.component";
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

const CatalogPresenter = ({ hasActiveProduct, categories, onClickHandler }) => {
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
                return <CategoryItem>{category.name}</CategoryItem>;
              })}
            </PickerScrollBottomWrap>
          </PickerScrollMiddleWrap>
        </CategoryPicker>

        <ProductsWrap>
          {categories.map((category) => {
            return (
              <>
                <CategoryTitle>{category.name}</CategoryTitle>
                <DishWrapper>
                  {category.products.items.map((item) => {
                    return (
                      <Dish onClick={() => onClickHandler(item.id)}>
                        <p>{item.name}</p>
                        <p>{item.description}</p>
                        <p>{item.price} eur</p>
                      </Dish>
                    );
                  })}
                </DishWrapper>
              </>
            );
          })}
        </ProductsWrap>
      </PageWrapper>
    </>
  );
};

export default CatalogPresenter;
