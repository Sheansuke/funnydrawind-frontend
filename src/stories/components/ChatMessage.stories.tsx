import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { ChatMessage, ChatMessageProps } from "@components/Chat/ChatMessage";

export default {
  component: ChatMessage,
  title: "Components/ChatMessage",
} as Meta;

export const ChatMessageComponent: React.VFC<ChatMessageProps> = (args) => (
  <ChatMessage {...args} />
);
