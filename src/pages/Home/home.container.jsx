import { useState } from "react";
import { useHistory } from "react-router-dom";

import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import HomeComponent from "./home.presenter";

const Home = () => {
  const history = useHistory();

  const [shippingType, setShippingType] = useState(null);
  const [error, setError] = useState(null);

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setShippingType(event.target.value);
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
        error={error}
      />
    </>
  );
};

export default withHeaderAndFooter(Home);
