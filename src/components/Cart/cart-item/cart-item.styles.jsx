import styled from "styled-components";

import ProductQuantityComponent from "../../Product/product-quantity/product-quantity.component";

export const ItemWrap = styled.div`
  width: 100%;
  padding: 20px 15px;
  border-bottom: 1px solid #e0e1e2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductQuantity = styled(ProductQuantityComponent)`
  width: 55%;
  height: 48px;
  box-shadow: none;
  background-color: #f0f3f4;
  margin: 0;
`;

export const ItemInfo = styled.div`
  color: #324755;
  width: 44%;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Price = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
