import React from "react";
import Footer from "./index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "template/footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const DefaultFooter = Template.bind({});
