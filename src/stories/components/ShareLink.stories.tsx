import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { ShareLink, ShareLinkProps } from "@components/ShareLink/ShareLink";

export default {
  component: ShareLink,
  title: "Components/ShareLink",
} as Meta;

export const ShareLinkComponent: React.VFC<ShareLinkProps> = (args) => (
  <ShareLink {...args} />
);
