import React from "react";
import IconButton from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultTextBox } from "../Input";
import { ITextBox } from "../Input/Input.types";

export default {
  title: "IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = () => (
  <IconButton name={"HighlightOffRounded"} />
);

const Default = Template.bind({});
Default.args = {};
