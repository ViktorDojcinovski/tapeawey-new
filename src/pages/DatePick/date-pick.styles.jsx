import styled from "styled-components";

import titleBg from "../../assets/img-1.jpg";

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${titleBg});
  background-size: cover;
  background-position: top center;
  height: 250px;
`;

const Title = styled.h1`
  font-size: 44px;
  fort-family: Overpass, sans-serif;
  font-weight: 100;
  color: #324755;
  line-height: 44px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #324755;
  height: 300px;
`;

const ConfirmButton = styled.button`
  background-color: #d97d54;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 100px;
  width: 80%;
  font-size: 22px;
  font-family: "Overpass";
  font-weight: 400;
  box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.3);
`;

export { TitleWrapper, Title, FormWrapper, ConfirmButton };
