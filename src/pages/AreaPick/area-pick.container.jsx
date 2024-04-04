import React, { useState } from "react";

import AreaPickPresenter from "./area-pick.presenter";
import withHeaderAndFooter from "../../hocs/withHeaderAndFooter";

const AreaPick = () => {
  const [area, setArea] = useState("");

  return (
    <AreaPickPresenter
      onChangeHandler={(event) => setArea(event.target.value)}
      area={area}
    />
  );
};

export default withHeaderAndFooter(AreaPick);
