import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import {
  ChooseAvatarButton,
  ChooseAvatarButtonProps,
} from "@components/Avatar/ChooseAvatarButton";

export default {
  component: ChooseAvatarButton,
  title: "Components/ChooseAvatarButton",
} as Meta;

export const AvatarChooseImage: React.VFC<ChooseAvatarButtonProps> = (args) => (
  <ChooseAvatarButton {...args} />
);
