import {
  FormWrapper,
  Title,
  TitleWrapper,
  ConfirmButton,
} from "./area-pick.styles";
import Input from "../../components/InputField/input-field.component";

const AreaPickPresenter = ({ onChangeHandler, area }) => {
  return (
    <div>
      <TitleWrapper>
        <Title>
          TASTY FOOD <br /> HOME
        </Title>
      </TitleWrapper>
      <FormWrapper>
        <Input
          type="select"
          name="area"
          value={area}
          onChange={onChangeHandler}
          options={[
            { value: "Rome", label: "Rome" },
            { value: "Milan", label: "Milan" },
          ]}
          placeholder={"Select Area"}
        />
        <ConfirmButton>Confirm</ConfirmButton>
      </FormWrapper>
    </div>
  );
};

export default AreaPickPresenter;
