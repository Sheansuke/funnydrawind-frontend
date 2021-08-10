import React from "react";
import { tw } from "@utils/tailwindClass";

// components
import { Avatar } from "@components/Avatar/Avatar";

export interface PlayerPerfilProps {
  avatarUrl: string;
  name?: string;
  points?: number;
  rank?: number;
}

export const PlayerPerfil: React.FC<PlayerPerfilProps> = ({
  name = "Nadie",
  avatarUrl = "",
  points = 0,
  rank = 0,
}) => {
  return (
    <div
      className={tw(
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 rounded-lg bg-blue-100 ",
        "flex items-center justify-between p-2"
      )}
    >
      <div className={tw("flex items-center ")}>
        <Avatar url={avatarUrl} width={16} />

        <div>
          <p className={tw("ml-2 font-semibold text-blue-100")}>{name}</p>
          {points > 0 && (
            <p className={tw("ml-2 text-green-100")}>{points}Pts</p>
          )}
        </div>
      </div>
      {rank > 0 && (
        <p className={tw("text-xl font-bold text-yellow-100")}>#{rank}</p>
      )}
    </div>
  );
};
