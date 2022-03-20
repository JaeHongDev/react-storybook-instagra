import React, { useState } from "react";
import { ButtonInsideTextBox } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IButtonInsideTextBox } from "./Input.types";
import Button from "../Button";
import Icon from "../Icon";

export default {
  title: "Input/ButtonInsideTextBox",
  component: ButtonInsideTextBox,
} as ComponentMeta<typeof ButtonInsideTextBox>;

const Template: ComponentStory<typeof ButtonInsideTextBox> = ({
  placeholder,
  value,
  onChange,
  endAdornment,
}: IButtonInsideTextBox) => (
  <ButtonInsideTextBox
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    endAdornment={endAdornment}
  />
);

export const ButtonInsideTextBoxStory = Template.bind({});
ButtonInsideTextBoxStory.args = {
  value: "",
  placeholder: "빈값",
  onChange: () => {},
  endAdornment: <Icon name={"HighlightOffRounded"} />,
};

const VisibleChangeButton = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const visibleChange = () => {
    setVisible(!visible);
  };
  if (visible) return <Button text={"비밀번호 표시"} onClick={visibleChange} />;
  return <Button text={"숨기기"} onClick={visibleChange} />;
};
// Password TextBox
export const PasswordTextBoxStory = Template.bind({});
PasswordTextBoxStory.args = {
  value: "",
  placeholder: "비밀번호",
  onChange: () => {},
  endAdornment: <VisibleChangeButton />,
};
