import styled, { css } from "styled-components";

import Button from "../../components/Product/button/button.component";

const CenterContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageWrap = styled.div`
  position: absolute;
  top: 100px;
  right: 50px;
  width: 30%;
  max-width: 350px;
  height: auto;
  background-color: #f0f3f4;
  float: left;
  box-shadow: 0 6px 7px rgba(27, 28, 32, 0.3);
  border-radius: 5px;
  z-index: 100;
`;

export const Header = styled.header`
  ${CenterContent}
  height: 70px;
  box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
  background-color: #6e8ca0;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;

export const CartItemsWrap = styled.div`
  border-bottom: 2px solid #d97d54;
  width: 100%;
`;

export const TotalDetails = styled.div`
  width: 100%;
  padding: 15px 20px 0;
  border-top: 1px solid #ccc;
  background-color: #f0f3f4;
`;

export const TotalDetailsRow = styled.div`
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  color: #324755;
  display: flex;
  justify-content: space-between;

  .title {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const ControlsWrap = styled.div`
  width: 100%;
  padding: 28px 20px;
  border-top: 1px solid #ccc;
`;

export const CartTotalWrap = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #324755;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .thin {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const GoToCheckout = styled(Button)`
  width: 80%;
  margin: 18px auto;
`;

export const EmptyCardWrapper = styled.div`
  text-align: center;
  margin-top: 45%;
  margin-bottom: 45%;
`;
