import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import HomeComponent from "./home.presenter";
import { fetchShippingTypes } from "../../redux/shop/shop.thunks";
import { setShippingTypeRedux } from "../../redux/shop/shop.actions";

const Home = () => {
  const history = useHistory();
  const [shippingType, setShippingType] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const shippingTypes = useSelector((state) => state.shop.shippingTypes);

  useEffect(() => {
    dispatch(fetchShippingTypes());
  }, [dispatch]);

  const onChangeHandler = (event) => {
    setShippingType(event.target.value);
    dispatch(setShippingTypeRedux(event.target.value));
  };

  const onClickHandler = (event) => {
    console.log("clicked");
    if (!shippingType) {
      setError("Please insert a valid shipping type");
    } else {
      setError(null);
      history.push("/area-pick");
    }
  };

  return (
    <>
      <HomeComponent
        onChangeHandler={onChangeHandler}
        onClickHandler={onClickHandler}
        shippingType={shippingType}
        shippingTypes={shippingTypes}
        error={error}
      />
    </>
  );
};

export default withHeaderAndFooter(Home);
