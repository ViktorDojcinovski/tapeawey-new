import {
  FormWrapper,
  TitleWrapper,
  Title,
  ConfirmButton,
  Error,
} from "./home.styles";
import Input from "../../components/InputField/input-field.component";

// { boolean ? <></> : <></> }
// { boolean && <></> }

const HomeComponent = ({
  onChangeHandler,
  shippingType,
  shippingTypes,
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
        {shippingTypes &&
          shippingTypes.map((type) => {
            return (
              <Input
                type="radio"
                name="delivery"
                value={type}
                onChange={onChangeHandler}
                checked={shippingType === type}
              />
            );
          })}
        <ConfirmButton onClick={onClickHandler}>Confirm</ConfirmButton>
        <Error>{error && error}</Error>
      </FormWrapper>
    </div>
  );
};

export default HomeComponent;
