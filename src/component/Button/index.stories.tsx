import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button, { IButton } from "./index";
import LoadingSvg from "../../svg/Loading";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (props: IButton) => (
  <Button {...props} />
);

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  text: "Button",
  variant: "outlined",
};

// 버튼 클릭 후 안의 내용물이 로딩 처리 하도록 되는 라이브러리
export const ButtonClickAfterLoading = Template.bind({});
ButtonClickAfterLoading.args = {
  text: "버튼 로딩테스트",
  children: LoadingSvg,
  loading: false,
};
