import React from "react";
import { tw } from "@utils/tailwindClass";
import { NewsItem, NewsItemProps } from "@components/News/NewsItem";

export interface NewsProps {
  newsItems?: NewsItemProps[];
}

export const News: React.FC<NewsProps> = ({ newsItems = [] }) => {
  return (
    <div
      className={tw(
        " w-96 h-101 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-lg  "
      )}
    >
      <h2 className={tw("text-3xl text-blue-100 text-center mb-4 font-normal")}>
        ¡NOVEDADES!
      </h2>
      <ul
        className={tw(
          "flex flex-col gap-2 overflow-y-scroll scrollbar-hide p-2"
        )}
      >
        {newsItems.length > 0 ? (
          newsItems?.map((item) => (
            <li>
              <NewsItem title={item?.title} description={item?.description} />
            </li>
          ))
        ) : (
          <p className={tw("text-lg text-yellow-500")}>
            Aqui pondría una noveda, si tan solo tuviera una...
          </p>
        )}
      </ul>
    </div>
  );
};
