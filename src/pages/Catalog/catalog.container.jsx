import { useDispatch, useSelector } from "react-redux";

import CatalogPresenter from "./catalog.presenter";
import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import { setActiveItem } from "../../redux/catalog/catalog.actions";

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

const Catalog = () => {
  const hasActiveProduct = useSelector((state) => state.catalog.activeItem);
  const dispatch = useDispatch();
  const onClickHandler = (id) => {
    dispatch(setActiveItem(id));
  };

  return (
    <CatalogPresenter
      hasActiveProduct={hasActiveProduct}
      categories={categories}
      onClickHandler={onClickHandler}
    />
  );
};

export default withHeaderAndFooter(Catalog);
