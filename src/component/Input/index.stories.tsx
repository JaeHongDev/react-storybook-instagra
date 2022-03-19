import React from "react";
import { DefaultTextBox } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITextBox } from "./Input.types";

export default {
  title: "default",
  component: DefaultTextBox,
} as ComponentMeta<typeof DefaultTextBox>;

const Template: ComponentStory<typeof DefaultTextBox> = ({
  placeholder,
  value,
  onChange,
}: ITextBox) => (
  <DefaultTextBox placeholder={placeholder} value={value} onChange={onChange} />
);

const DefaultTextBoxStory = Template.bind({});

DefaultTextBoxStory.args = {
  value: "",
  placeholder: "빈값",
  onChange: () => {},
};
