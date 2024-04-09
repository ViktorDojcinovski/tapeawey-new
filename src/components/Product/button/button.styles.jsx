import styled, { css } from "styled-components";

const ControlButtonStyles = css`
  width: 100%;
  height: 50px;
  border-radius: 100px;
  padding: 0 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const LightButton = styled.button`
  ${ControlButtonStyles}
  background: none;
  border: solid 2px #6e8ca0;
  color: #6e8ca0;
`;

export const Button = styled.button`
  ${ControlButtonStyles}
  border: none;
  background-color: #d97d54;
  color: white;
`;