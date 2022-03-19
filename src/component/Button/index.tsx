import React from "react";
import { Button as MuiButton } from "@mui/material";
import { OverridableStringUnion } from "@mui/types";
import { ButtonPropsVariantOverrides } from "@mui/material/Button/Button";

type buttonType = {
  text: string;
  variant?: "text" | "outlined" | "contained";
};

const Button = ({ text, variant = "text" }: buttonType) => {
  return (
    <MuiButton style={{ width: "100%" }} variant={variant}>
      {text}
    </MuiButton>
  );
};

export default Button;
