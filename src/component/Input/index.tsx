import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { IButtonInsideTextBox, ITextBox } from "./Input.types";

const CssTextField = styled(TextField)({
  minWidth: 300,
  justifyContent: "space-around",
  border: "2px solid rgba(var(--ca6,219,219,219),1);",
  backgroundColor: "#ffffff",
});

export const DefaultTextBox = ({ placeholder, value, onChange }: ITextBox) => {
  return (
    <CssTextField
      sx={{ m: 1 }}
      variant="filled"
      size="small"
      label={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};
export const ButtonInsideTextBox = ({
  placeholder,
  value,
  onChange,
  endAdornment,
}: IButtonInsideTextBox) => {
  return (
    <CssTextField
      sx={{ m: 1 }}
      variant="filled"
      size="small"
      label={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        disableUnderline: true,
        endAdornment: endAdornment,
      }}
    />
  );
};
