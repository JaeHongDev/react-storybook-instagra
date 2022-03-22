import React from "react";
import Icon, { IconType } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (props: IconType) => (
  <Icon {...props} />
);

export const IconStory = Template.bind({});
IconStory.args = {
  name: "HighlightOffRounded",
};
