import React from "react";
import Login from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organism/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = () => <Login />;

export const LoginStory = Template.bind({});
