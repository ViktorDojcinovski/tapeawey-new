import {
  PageWrapper,
  FooterWrapper,
  Legal,
  PolicyLinks,
} from "./footer.styles";

const Footer = () => {
  return (
    <PageWrapper>
      <FooterWrapper>
        <Legal>© Acme - all rights reserved</Legal>

        <PolicyLinks>
          <a>Cookie Policy</a>
          <a>Privacy Policy</a>
          <a>Terms and Conditions</a>
        </PolicyLinks>
      </FooterWrapper>
    </PageWrapper>
  );
};

export default Footer;
