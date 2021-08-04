import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { NewsItem, NewsItemProps } from "@components/News/NewsItem";

export default {
  component: NewsItem,
  title: "Components/NewsItem",
} as Meta;

export const NewsItemComponent: React.VFC<NewsItemProps> = (args) => (
  <NewsItem {...args} />
);
