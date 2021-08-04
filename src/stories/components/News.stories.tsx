import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import { News, NewsProps } from "@components/News/News";

export default {
  component: News,
  title: "Components/News",
} as Meta;

const items = [
  {
    title: "News Item 1",
    description: "This is the first news item",
  },
  {
    title: "News Item 2",
    description: "This is the second news item",
  },
];

export const NewsComponent: React.VFC<NewsProps> = () => (
  <News newsItems={items} />
);
