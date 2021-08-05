import React from "react";
import { tw } from "@utils/tailwindClass";

export interface NewsItemProps {
  title?: string;
  description?: string;
}

export const NewsItem: React.FC<NewsItemProps> = ({
  title = "No title",
  description = "No description",
}) => {
  return (
    <div
      className={tw(
        "w-full bg-blue-100 rounded-md p-2 backdrop-filter backdrop-blur-xl bg-opacity-60 "
      )}
    >
      <h2 className={tw("text-xl text-blue-600 font-semibold")}>{title}</h2>
      <p className={tw("text-base text-blue-900")}>{description}</p>
    </div>
  );
};
