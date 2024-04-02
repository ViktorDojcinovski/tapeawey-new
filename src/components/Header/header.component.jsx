import { Link } from "react-router-dom";

import Logo from "../../assets/acme-logo.png";
import { HeaderWrapper } from "./header.styles";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <img src={Logo} alt="" width="80" />
        </Link>
      </HeaderWrapper>
    </>
  );
};

export default Header;
