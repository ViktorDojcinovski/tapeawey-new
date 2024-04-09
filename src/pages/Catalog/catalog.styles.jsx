import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  background-color: #f0f3f4;
  position: relative;
`;

export const CategoryPicker = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const PickerScrollMiddleWrap = styled.div`
  position: relative;
  padding-bottom: 28px;
  bottom: -28px;
  overflow-x: scroll;
  display: flex;
`;

export const PickerScrollBottomWrap = styled.div`
  width: "60%";
  display: flex;
  padding: 0 19px 24px;
`;

export const CategoryItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const CategoryTitle = styled.h5`
  font-weight: 600;
  font-size: 21px;
  color: #324755;
  text-align: center;
  padding: 20px 0 15px;
  margin: 0;
  clear: left;
`;

export const ProductsWrap = styled.div`
  width: "65%";
  float: "left";
  padding: 0 18px 32px 18px;
`;

export const Dish = styled.div``;

export const DishWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  flex-direction: row;

  margin: 0 20px;

  ${Dish} {
    width: 200px;
    margin: 10px 0;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

export const Footer = styled.div`
  width: 100%;
  text-align: center;
  background-color: #324755;
  padding: 48px 15px;
`;

export const FooterText = styled.p`
  color: white;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
  margin-bottom: 8px;
`;

export const FooterTel = styled.a`
  color: #d97d54;
  font-size: 16px;
  line-height: 24px;
`;

export const CartBottomWrapper = styled.div`
  display: "none";
`;

export const ProductWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  z-index: 1000;
`;
