import React from "react";
import { tw } from "@utils/tailwindClass";

// components
import { Board } from "@components/Board/Board";
import { PreSalaPlayers } from "@components/PreSalaPlayers/PreSalaPlayers";

const players = [
  {
    name: "Juan",
    avatarUrl: "",
    points: 10,
    rank: 1,
  },
  {
    name: "Pedro",
    avatarUrl: "",
    points: 20,
    rank: 2,
  },
  {
    name: "Pablo",
    avatarUrl: "",
    points: 30,
    rank: 3,
  },
];

const Sala = () => {
  return (
    <div
      className={tw(
        "flex flex-col md:flex-row md:justify-around items-center  w-screen gap-2"
      )}
    >
      <div className={tw("flex-none w-80 p-1")}>
        <div className={tw("justify-between")}>
          <p className={tw("text-blue-100 text-sm")}>Ronda: 1 de 3</p>
        </div>
        <PreSalaPlayers players={players} />
      </div>

      <div className={tw("flex  flex-grow flex-col  ")}>
        <div className={tw("flex flex-grow justify-between")}>
          <p className={tw("text-blue-100 text-sm")}>Turno de: Sheansuke</p>
          <p className={tw("text-blue-100 text-sm")}>Tiempo restante: 30s</p>
        </div>
        <div className={tw("rounded-lg overflow-hidden")}>
          <Board user="Sheansuke" />
        </div>
      </div>

      <div className={tw("flex-none w-80 p-1")}>
        <PreSalaPlayers players={players} />
      </div>
    </div>
  );
};

export default Sala;
