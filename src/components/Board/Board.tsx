import { useState, useEffect, useRef } from "react";
import DrawingBoard from "react-drawing-board";

import Player from "@api/models/player";

import { useHistory } from "react-router-dom";

// firebase
import { Room } from "@api/models/room";
import { updateOperations } from "@api/fetch/updateOperations";
import { getOperations } from "@api/fetch/getOperations";

export interface BoardProps {
  player: Player;
  roomId: string;
  room: Room;
}

export const Board: React.FC<BoardProps> = ({ player, room }) => {
  let prevRoom = useRef<Room>(room);
  console.log("🚀 ~ file: Board.tsx ~ line 21 ~ prevRoom", prevRoom.current);
  const history = useHistory();

  const [operations, setOperations] = useState<any>([]);
  const currentPlayer = room.game.currentPlayer;

  const boardOperations = (newOperation: any, afterOperation: any) => {
    const parseOperations = {
      ...newOperation,
      pos: "",
    };

    // const boardUser = newOperation?.userId;
    updateOperations(room.id, parseOperations, false);
  };

  // if user change reset board
  useEffect(() => {
    if (
      prevRoom.current.game.currentPlayerNumber !==
      room.game.currentPlayerNumber
    ) {
      updateOperations(room.id, [], true);
      prevRoom.current = room;
    }
  }, [room]);

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
