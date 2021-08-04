import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import {
  ChooseAvatarModal,
  ChooseAvatarModalProps,
} from "@components/Avatar/ChooseAvatarModal";

export default {
  component: ChooseAvatarModal,
  title: "Components/ChooseAvatarModal",
} as Meta;

export const ChooseAvatarModalComponent: React.VFC<ChooseAvatarModalProps> = (
  args
) => <ChooseAvatarModal {...args} />;
