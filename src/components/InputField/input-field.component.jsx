import {
  InputWrapper,
  HiddenInput,
  StyledRadioButton,
  Label,
  Select,
  DateWrap,
  Date,
} from "./input-field.style";

// Create a function that returns an input field according to the type of input field
const getInputElement = ({
  type,
  name,
  value,
  onChange,
  checked,
  options,
  placeholder,
}) => {
  switch (type) {
    case "date":
      return (
        <DateWrap>
          <Date type={type} name={name} onChange={onChange} value={value} />
        </DateWrap>
      );
    case "radio":
      return (
        <Label htmlFor={value}>
          <HiddenInput
            id={value}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
          <StyledRadioButton checked={checked} />
          {value}
        </Label>
      );
    case "select":
      return (
        <Select>
          {value ? options.find((i) => i.value === value).label : placeholder}
          <select value={value} onChange={onChange} name={name}>
            <option value="" disabled hidden>
              {placeholder}
            </option>
            {options
              ? options.map(({ label, value }) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))
              : ""}
          </select>
        </Select>
      );
    default:
      return <input type="text" />;
  }
};

const Input = ({
  type,
  name,
  value,
  onChange,
  checked,
  options,
  placeholder,
}) => {
  const controlProps = {
    type,
    name,
    value,
    onChange,
    checked,
    options,
    placeholder,
  };
  /**
   * <label for="">
   *  <input type="radio" id="" value="male" hidden checked />
   *  <div></div>
   * </label>
   *
   * <label for="">
   *  <input id="" value="female"/>
   * </label>
   */

  return <InputWrapper>{getInputElement({ ...controlProps })}</InputWrapper>;
};

export default Input;
