import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { Chat, ChatProps } from "@components/Chat/Chat";

export default {
  component: Chat,
  title: "Components/Chat",
} as Meta;

export const ChatComponent: React.VFC<ChatProps> = (args) => <Chat {...args} />;
