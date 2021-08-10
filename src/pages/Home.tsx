import React, { useState, useEffect } from "react";
import { tw } from "@utils/tailwindClass";

// firebase
import { getNews } from "@api/fetch/getNews";

// Components
import { HomeCreateRoom } from "@components/HomeCreateRoom/HomeCreateRoom";
import { News } from "@components/News/News";
import { NewsItemProps } from "@components/News/NewsItem";

const Home = () => {
  const [newsItems, setNewsItems] = useState<NewsItemProps[]>([]);

  // news collection
  useEffect(() => {
    getNews(setNewsItems);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className={tw("flex flex-col justify-center  items-center")}>
        <p
          className={tw(
            "md:text-4xl text-2xl w-2/3 text-center text-blue-100 mb-6"
          )}
        >
          ¡Diviertete con amigos y deja volar tu imaginacion!
        </p>
        <HomeCreateRoom />
      </div>
      <div className={tw("flex justify-center items-center mt-4 md:mt-0 ")}>
        <News newsItems={newsItems} />
      </div>
    </div>
  );
};

export default Home;
