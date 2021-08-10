import { useState, useEffect, memo } from "react";
import { tw } from "@utils/tailwindClass";
import { useHistory, useParams } from "react-router-dom";

import { motion } from "framer-motion";

// firebase
import { updatePlayers } from "@api/fetch/updatePlayers";
import { getRoom } from "@api/fetch/getRoom";

// redux
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";

// components
import { PreSalaNoName } from "./PreSalaNoName";
import PreSalaConfig from "@components/PreSalaConfig/PreSalaConfig";
import { PreSalaPlayers } from "@components/PreSalaPlayers/PreSalaPlayers";
import { ShareLink } from "@components/ShareLink/ShareLink";

const PreSala = () => {
  const history = useHistory();
  const params: any = useParams();
  const dispatch = useDispatch();
  const player = useSelector((state: RootState) => state.playerReducer);
  const room = useSelector((state: RootState) => state.roomReducer);

  console.log("Hola");
  // Get Room data
  useEffect(() => {
    getRoom(params?.roomId, dispatch, history);
  }, []);

  // Update players when new user join to room
  useEffect(() => {
    if (player.name) {
      updatePlayers(params.roomId, room?.players, player);
    }
  }, [player]);

  return (
    <>
      {player.name ? ( // Container DIV
        <div className="grid w-screen grid-cols-1 overflow-hidden md:grid-cols-2">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div
              className={tw(
                "flex flex-col justify-center md:items-end items-center md:mr-8 "
              )}
            >
              <PreSalaConfig room={room} roomId={room.id} />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div
              className={tw(
                "flex md:justify-start justify-center items-center md:ml-8 mt-5 md:mt-0"
              )}
            >
              <div className="w-96">
                <PreSalaPlayers players={room?.players} />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: 500 }}
            animate={{ y: 0 }}
            transition={{ ease: "easeOut", duration: 1 }}
          >
            <div className={tw("flex  w-screen items-center justify-center ")}>
              <ShareLink link={`${window.location.href}`} />
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen ">
          <p className="text-lg text-blue-100">
            Elige un nombre para poder unirte a la sala!
          </p>
          <PreSalaNoName isName={false} />
        </div>
      )}
    </>
  );
};

export default memo(PreSala);
