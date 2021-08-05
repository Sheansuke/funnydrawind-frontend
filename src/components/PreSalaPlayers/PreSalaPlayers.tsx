import React from "react";
import { tw } from "@utils/tailwindClass";
import Anime from "react-anime";
import {
  PlayerPerfil,
  PlayerPerfilProps,
} from "@components/PlayerPerfil/PlayerPerfil";

export interface PresaSalaPlayersProps {
  players: PlayerPerfilProps[];
}

export const PreSalaPlayers: React.FC<PresaSalaPlayersProps> = ({
  players = [],
}) => {
  return (
    <div
      className={tw(
        " h-101 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-lg   "
      )}
    >
      <h2 className={tw("text-3xl text-blue-100 text-center mb-4 font-normal")}>
        Jugadores
      </h2>

      <ul
        className={tw(
          "flex flex-col gap-2 overflow-y-scroll scrollbar-hide p-2"
        )}
      >
        {players.length > 0 ? (
          <Anime opacity={[0, 1]} translate={[-64, 0]} delay={2}>
            {players?.map((player, index) => (
              <Anime opacity={[0, 1]} translate={[-64, 0]} delay={2}>
                <li key={index}>
                  <PlayerPerfil
                    name={player?.name}
                    avatarUrl={player?.avatarUrl}
                    points={player?.points}
                    rank={player?.rank}
                  />
                </li>
              </Anime>
            ))}
          </Anime>
        ) : (
          <p className={tw("text-lg text-yellow-500")}>Y los players...</p>
        )}
      </ul>
    </div>
  );
};
