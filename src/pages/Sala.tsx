import { useState, useEffect } from "react";
import { tw } from "@utils/tailwindClass";
import { motion } from "framer-motion";

// redux
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

// react-router-dom
import { useHistory } from "react-router-dom";

// firebase
import IChat from "@api/models/chat";

// components
import { Chat } from "@components/Chat/Chat";
import { Board } from "@components/Board/Board";
import { PreSalaPlayers } from "@components/PreSalaPlayers/PreSalaPlayers";

import { Game } from "@game/Game";
import { memo } from "react";
const Sala = () => {
  const history = useHistory<any>();

  const player = useSelector((state: RootState) => state.playerReducer);
  const room = useSelector((state: RootState) => state.roomReducer);

  const [messages, setMessages] = useState<IChat[]>([]);

  // if player try go to sala without room if redirect to /
  useEffect(() => {
    if (!room) {
      history.push("/");
    }

    if (room.id) {
      setMessages(room.chat);
    } else {
      history.push("/");
    }
  }, [room]);

  useEffect(() => {
    const game = new Game(room, player);
    // game.startSecondsToDraw();
  }, [room]);

  return (
    <div
      className={tw(
        "flex flex-col md:flex-row md:justify-around items-center  w-screen gap-2 overflow-hidden"
      )}
    >
      {/* CHAT */}
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className={tw("flex-none w-80 p-1")}>
          <div className={tw("justify-between")}>
            <p className={tw("text-blue-100 text-sm")}>Ronda: 1 de 3</p>
          </div>
          <Chat messages={messages} roomId={room.id} player={player} />
        </div>
      </motion.div>

      {/* BOARD */}
      <motion.div
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className={tw("flex  flex-grow flex-col  ")}>
          <div className={tw("flex flex-grow justify-between")}>
            <p className={tw("text-blue-100 text-sm")}>Turno de: Sheansuke</p>
            <p
              className={tw("text-blue-100 text-sm")}
            >{`Tiempo restante: ${room.game.secondsRemaining}`}</p>
          </div>
          <div className={tw("rounded-lg overflow-hidden")}>
            <Board player={player} roomId={room.id} room={room} />
          </div>
        </div>
      </motion.div>

      {/* PLAYERS */}
      <motion.div
        initial={{ x: 500 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className={tw("flex-none w-80 p-1")}>
          <PreSalaPlayers players={room.players} />
        </div>
      </motion.div>
    </div>
  );
};

export default memo(Sala);
