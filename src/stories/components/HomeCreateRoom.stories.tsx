import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { HomeCreateRoom } from "@components/HomeCreateRoom/HomeCreateRoom";

export default {
  component: HomeCreateRoom,
  title: "Components/HomeCrearSala",
} as Meta;

export const AvatarChooseImage: React.VFC = (args) => (
  <HomeCreateRoom {...args} />
);
