import styled, { css } from "styled-components";

// padded string literal func``
const ControlStyles = css`
  background-color: white;
  box-shadow: 0 6px 7px rgba(27, 28, 32, 0.3);
  border-radius: 5px;
  border: none;
  width: 100%;
  height: 52px;
  font-family: inherit;
  font-weight: 100;
  font-size: 14px;
  padding: 16px 26px;

  &:placeholder {
    color: #8b8b8b;
  }

  &:disabled {
    opacity: 0.7;

    & + button {
      opacity: 0.7;
    }
  }

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: #6e8ca0;
  font-size: 15px;
  margin-bottom: 5px;
  cursor: pointer;
  a {
    color: #d97d54;

    &:hover {
      color: black;
    }
  }
`;

const Date = styled.input``;

const DateWrap = styled.div`
  box-shadow: 0 6px 7px rgba(27, 28, 32, 0.3);
  border-radius: 5px;
  width: 100%;
  height: 52px;
  background-color: white;
  ${Date} {
    width: 100%;
    height: 100%;
    padding: 16px 26px;
    font-family: inherit;
    font-weight: 100;
    font-size: 14px;
    border: none;
    &:placeholder {
      color: #8b8b8b;
    }
    &:disabled {
      opacity: 0.7;
    }
    &:focus {
      outline: none;
    }
  }
`;

const Select = styled.div`
  ${ControlStyles}
  position: relative;

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    font-size: 16px;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  & input {
    margin: 0;
    margin-right: 10px;
  }
  & label {
    margin: 0;
    font-size: 18px;
    line-height: 18px;
    color: white;
  }
`;

const HiddenInputStyles = css`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadioButtonStyles = css`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 14px;
  border-radius: 50%;
  border: none;
  transition: all 150ms;
  background-color: ${(props) => (props.checked ? "#d97d54" : "white")};
`;

const HiddenInput = styled.input`
  ${HiddenInputStyles}
`;

const StyledRadioButton = styled.div`
  ${StyledRadioButtonStyles}
`;

export {
  InputWrapper,
  HiddenInput,
  StyledRadioButton,
  Label,
  Select,
  DateWrap,
  Date,
};
