import React from "react";
import { IconButton } from "@mui/material";
import Icon, { IconType } from "../Icon";

const CustomIconButton = (props: IconType) => {
  return (
    <IconButton
      color="primary"
      component="span"
      disableTouchRipple
      disableFocusRipple
      style={{ backgroundColor: "transparent" }}
    >
      <Icon name={props.name} />
    </IconButton>
  );
};

export default CustomIconButton;
