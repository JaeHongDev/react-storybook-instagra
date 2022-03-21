import React from "react";
import Auth from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "page/auth",
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = () => <Auth />;

export const LoginStory = Template.bind({});
