import styled, { css } from "styled-components";

import quantityIncrease from "../../../assets/quantity-increase.svg";
import quantityDecrease from "../../../assets/quantity-decrease.svg";

export const QuantityBlock = styled.div`
  width: 200px;
  height: 52px;
  margin: 0 auto;
  box-shadow: 0 20px 30px 0 rgba(27, 28, 32, 0.3);
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: 600;
  color: #324755;
`;

const QuantityChangingButtonStyles = css`
  width: 52px;
  height: 100%;
  background-color: #d97d54;
  background-position: center;
  background-repeat: no-repeat;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const QuantityIncrease = styled.button`
  ${QuantityChangingButtonStyles}
  background-image: url(${quantityIncrease});
`;
export const QuantityDecrease = styled.button`
  ${QuantityChangingButtonStyles}
  background-image: url(${quantityDecrease});
`;
