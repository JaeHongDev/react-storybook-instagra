import React from "react";
import { Button as MuiButton } from "@mui/material";
import LoadingSvg from "../../svg/Loading";

export type IButton = {
  text?: string;
  variant?: "text" | "outlined" | "contained";
  onClick?: () => void;
  children?: React.ReactNode;
  loading?: boolean;
};

const Button = ({
  children,
  text,
  variant = "text",
  onClick,
  loading = false,
}: IButton) => {
  return (
    <MuiButton style={{ width: "100%" }} variant={variant} onClick={onClick}>
      {loading ? <LoadingSvg /> : text}
    </MuiButton>
  );
};

export default Button;
