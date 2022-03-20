import React from "react";
import Icon, { IconType } from "../Icon";
import { IconButton } from "@mui/material";
import LoadingSvg from "../../svg/Loading";

interface SvgType {
  name: "loading";
}

const getSvgImage = (imageName: string) => {
  if (imageName === "loading") return <LoadingSvg />;
};

const CustomIconButtonSvg = (props: SvgType) => {
  return (
    <IconButton
      color="primary"
      component="span"
      disableTouchRipple
      disableFocusRipple
      style={{ backgroundColor: "blue" }}
    >
      {getSvgImage(props.name)}
      {"test"}
    </IconButton>
  );
};

export default CustomIconButtonSvg;
