import React from "react";
import Input from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { InputType } from "zlib";
import { ITextBox } from "./Input.types";

export default {
  title: "input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: ITextBox) => (
  <Input {...args} />
);

export const InpuStory = Template.bind({});
