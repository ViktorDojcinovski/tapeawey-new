import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DatePickPresenter from "./date-pick.presenter";
import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";
import { setShippingDate } from "../../redux/shop/shop.actions";

const DatePick = () => {
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const onChangehandler = (event) => {
    setDate(event.target.value);
    dispatch(setShippingDate(event.target.value));
  };

  return (
    <>
      <DatePickPresenter date={date} onChangeHandler={onChangehandler} />
    </>
  );
};

export default withHeaderAndFooter(DatePick);
