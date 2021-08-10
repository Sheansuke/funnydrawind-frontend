import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import PreSalaConfig from "@components/PreSalaConfig/PreSalaConfig";

export default {
  component: PreSalaConfig,
  title: "Components/PreSalaConfig",
} as Meta;

export const PreSalaConfigComponent: React.VFC<any> = (args) => (
  <PreSalaConfig {...args} />
);
