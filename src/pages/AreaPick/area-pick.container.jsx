import React, { useState } from "react";
import { useDispatch } from "react-redux";

import AreaPickPresenter from "./area-pick.presenter";
import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import { setShippingArea } from "../../redux/shop/shop.actions";

const AreaPick = () => {
  const [area, setArea] = useState("");
  const dispatch = useDispatch();

  return (
    <AreaPickPresenter
      onChangeHandler={(event) => {
        setArea(event.target.value);
        dispatch(setShippingArea(event.target.value));
      }}
      area={area}
    />
  );
};

export default withHeaderAndFooter(AreaPick);
