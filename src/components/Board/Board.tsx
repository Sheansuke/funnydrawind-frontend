import { useState, useEffect } from "react";
import DrawingBoard from "react-drawing-board";

import Player from "@api/models/player";

import { useHistory } from "react-router-dom";

// firebase
import { Room } from "@api/models/room";
import { updateOperations } from "@api/fetch/updateOperations";
import { getOperations } from "@api/fetch/getOperations";
import { current } from "@reduxjs/toolkit";

export interface BoardProps {
  player: Player;
  roomId: string;
  room: Room;
}

export const Board: React.FC<BoardProps> = ({ player, roomId, room }) => {
  console.log("🚀 ~ file: Board.tsx ~ line 21 ~ room", room);
  const history = useHistory();
  const [operations, setOperations] = useState<any>([]);
  const currentPlayer = room.game.currentPlayer;
  console.log("🚀 ~ file: Board.tsx ~ line 24 ~ currentPlayer", currentPlayer);

  const boardOperations = (newOperation: any, afterOperation: any) => {
    const parseOperations = {
      ...newOperation,
      pos: "",
    };

    // const boardUser = newOperation?.userId;
    updateOperations(room.id, parseOperations);
  };

  useEffect(() => {
    if (room) {
      getOperations(room.id, setOperations);
    } else {
      history.push("/");
    }
  }, []);

  return (
    <div className="relative bg-blue-100 ">
      <DrawingBoard
        userId="Sheansuke" // identify for different players.
        operations={operations}
        onChange={boardOperations}
        style={{
          width: "100%",
          height: "100%",

          backgroundColor: "rgba( 30, 41, 59, 0.25 )",
        }}
      />

      {currentPlayer !== player.name && (
        <div
          className="absolute top-0 left-0 z-50 bg-gray-900 bg-clip-padding backdrop-blur-xl bg-opacity-20"
          style={{
            width: "100%",
            height: "100%",
          }}
        ></div>
      )}
    </div>
  );
};
