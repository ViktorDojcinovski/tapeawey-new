import {
  FormWrapper,
  TitleWrapper,
  Title,
  ConfirmButton,
  Error,
} from "./home.styles";
import Input from "../../components/InputField/input-field.component";

const HomeComponent = ({
  onChangeHandler,
  shippingType,
  onClickHandler,
  error,
  children,
}) => {
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
        <ConfirmButton onClick={onClickHandler}>Confirm</ConfirmButton>
        <Error>{error && error}</Error>
      </FormWrapper>
    </div>
  );
};

export default HomeComponent;
