import React, { useState } from "react";

import { FormWrapper, TitleWrapper, Title, ConfirmButton } from "./home.styles";
import Input from "../../components/InputFields/input-field.component";

const HomeComponent = () => {
  const [shippingType, setShippingType] = useState("");

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setShippingType(event.target.value);
  };

  return (
    <div>
      <TitleWrapper>
        <Title>
          TASTY FOOD <br /> HOME
        </Title>
      </TitleWrapper>

      <FormWrapper>
        <Input
          type="radio"
          name="delivery"
          value="Courier Service"
          onChange={onChangeHandler}
          checked={shippingType === "Courier Service"}
        />
        <Input
          type="radio"
          name="delivery"
          value="Sea Fright"
          onChange={onChangeHandler}
          checked={shippingType === "Sea Fright"}
        />
        <ConfirmButton>Confirm</ConfirmButton>
      </FormWrapper>
    </div>
  );
};

export default HomeComponent;
