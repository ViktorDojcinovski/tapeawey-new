import {
  TitleWrapper,
  Title,
  FormWrapper,
  ConfirmButton,
} from "./date-pick.styles";
import Input from "../../components/InputField/input-field.component";

const DatePickPresenter = ({ onChangeHandler, date }) => {
  return (
    <div>
      <TitleWrapper>
        <Title>
          TASTY FOOD <br /> HOME
        </Title>
      </TitleWrapper>

      <FormWrapper>
        <Input
          type="date"
          name="date"
          value={date}
          onChange={onChangeHandler}
        />
        <ConfirmButton>Confirm</ConfirmButton>
      </FormWrapper>
    </div>
  );
};

export default DatePickPresenter;
