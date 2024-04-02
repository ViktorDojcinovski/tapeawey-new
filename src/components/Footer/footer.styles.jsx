import styled from "styled-components";

const Legal = styled.p`
  color: #fff;
  font-size: 12px;
  font-family: Overpass, sans-serif;
`;

const PageWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px - 90px);
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #324755;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
`;

const PolicyLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  a {
    color: #fff;
    font-size: 12px;
    font-family: Overpass, sans-serif;
    text-decoration: none;
    border-right: 1px solid #fff;
    padding-right: 10px;
    margin-left: 10px;
    &:last-child {
      border-right: none;
    }
  }
`;

export { PageWrapper, FooterWrapper, Legal, PolicyLinks };
