import {
  InputWrapper,
  HiddenInput,
  StyledRadioButton,
} from "./input-fields.style";

const Input = ({ type, name, value, onChange, checked }) => {
  // check the type of input field
  const labeledType = type === "radio" || type === "checkbox" ? true : false;

  return (
    <InputWrapper>
      {labeledType && (
        <>
          <label htmlFor={value}>
            <HiddenInput
              id={value}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
            <StyledRadioButton checked={checked} />
            {value}
          </label>
        </>
      )}
    </InputWrapper>
  );
};

export default Input;
