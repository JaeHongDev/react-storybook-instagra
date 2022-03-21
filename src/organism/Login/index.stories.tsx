import React from "react";
import Login, { ILogin } from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "organism/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args: ILogin) => (
  <Login {...args} />
);

export const LoginStory = Template.bind({});
LoginStory.args = {
  loginUser: { id: "", password: "" },
};
