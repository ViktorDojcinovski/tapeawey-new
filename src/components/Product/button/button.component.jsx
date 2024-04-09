import React, { Fragment } from "react";

import { LightButton, Button } from "./button.styles";

const ButtonComponent = ({ children, theme, ...props }) => (
  <Fragment>
    {theme === "light" ? (
      <LightButton {...props}>{children}</LightButton>
    ) : (
      <Button {...props}>{children}</Button>
    )}
  </Fragment>
);

export default ButtonComponent;
