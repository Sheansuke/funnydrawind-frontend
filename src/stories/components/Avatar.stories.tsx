import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@components/Avatar/Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
} as Meta;

export const AvatarImage: React.VFC<AvatarProps> = (args) => (
  <Avatar {...args} />
);
