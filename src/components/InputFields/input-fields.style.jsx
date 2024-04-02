import styled, { css } from "styled-components";

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

export { InputWrapper, HiddenInput, StyledRadioButton };
