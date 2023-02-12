import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import {logo} from 'assets1/assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="yariga" width="50px"  />
        ) : (
          <img src={logo} alt="Refine" width="60px" />
        )}
      </Link>
    </Button>
  );
};
