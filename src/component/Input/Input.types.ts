import React, { ReactElement } from "react";
import IconButton from "../IconButton";
import Button from "../Button";

export interface ITextBox {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButtonInsideTextBox extends ITextBox {
  endAdornment: ReactElement<typeof IconButton> | ReactElement<typeof Button>;
}
