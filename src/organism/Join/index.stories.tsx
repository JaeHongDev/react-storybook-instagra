import React from "react";
import Join from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organism/join",
  component: Join,
} as ComponentMeta<typeof Join>;

const Template: ComponentStory<typeof Join> = () => <Join />;

export const JoinStory = Template.bind({});
