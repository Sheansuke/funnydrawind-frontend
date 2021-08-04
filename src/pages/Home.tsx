import React from "react";
import { tw } from "@utils/tailwindClass";

// Components

import { HomeCreateRoom } from "@components/HomeCreateRoom/HomeCreateRoom";
import { News } from "@components/News/News";

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className={tw("flex flex-col justify-center  items-center ")}>
        <p className={tw("text-4xl w-2/3 text-center text-blue-100 mb-6")}>
          ¡Diviertete con amigos y deja volar tu imaginacion!
        </p>
        <HomeCreateRoom />
      </div>
      <div className={tw("flex justify-center items-center  ")}>
        <News
          newsItems={[
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
            {
              title: "¡Hola!",
              description: "¡Hola! ¿Qué tal estás?",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
