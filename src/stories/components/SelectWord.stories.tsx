import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { SelectWord, SelectWordProps } from "@components/SelectWord/SelectWord";

export default {
  component: SelectWord,
  title: "Components/SelectWord",
} as Meta;

export const SelectWordComponent: React.VFC<SelectWordProps> = (args) => (
  <SelectWord {...args} />
);
