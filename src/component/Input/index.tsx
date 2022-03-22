import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { ITextBox } from "./Input.types";

const CssTextField = styled(TextField)({
  minWidth: 300,
  justifyContent: "space-around",
  border: "2px solid rgba(var(--ca6,219,219,219),1);",
  backgroundColor: "#ffffff",
});

const Input = ({
  placeholder,
  value,
  onChange,
  endAdornment,
  type,
}: ITextBox) => {
  return (
    <CssTextField
      type={type}
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

export default Input;
