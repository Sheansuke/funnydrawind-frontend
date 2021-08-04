import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { Button, ButtonProps } from "@components/reusable/Button";

export default {
  component: Button,
  title: "Reusable/Button",
} as Meta;

export const ButtonComponent: React.VFC<ButtonProps> = (args) => (
  <Button {...args} />
);
