import styled from "styled-components";

import Button from "./button/button.component";

export const Wrapper = styled.div`
  position: absolute;
  background-color: white;
  width: 500px;
  height: calc(100% - 3.5rem);
  min-height: 670px;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  overflow: hidden;
  img {
    width: auto;
    height: 350px;
  }
`;

export const ProductName = styled.div`
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin: 10px auto;
`;

export const ProductDescription = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #6e8ca0;
  text-align: center;
  margin: 10px auto;
`;

export const ProductPrice = styled.h1`
  font-size: 16px;
  line-height: 0.94;
  text-align: center;
  color: #324755;
  padding-bottom: 37px;
`;

export const ProductControlsWrap = styled.div`
  width: 100%;
  margin-left: 0;
  padding: 28px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-around;
`;

export const AddToCartButton = styled(Button)``;
export const BackButton = styled(Button)`
  margin-right: 8px;
`;
