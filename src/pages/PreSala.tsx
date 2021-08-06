import React, { useState, useEffect, useRef } from "react";
import { useBeforeunload } from "react-beforeunload";
import { tw } from "@utils/tailwindClass";
import { useHistory, useParams } from "react-router-dom";
import { Player } from "@api/models/player";

// firebase
import { db } from "@api/firebase/firebase";

// redux
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPlayer } from "@redux/player/playerSlice";

// components
import { PreSalaNoName } from "./PreSalaNoName";
import { PreSalaConfig } from "@components/PreSalaConfig/PreSalaConfig";
import { PreSalaPlayers } from "@components/PreSalaPlayers/PreSalaPlayers";
import { ShareLink } from "@components/ShareLink/ShareLink";
import { Room } from "@api/models/room";

const PreSala = () => {
  const ref = useRef<any>();
  const history = useHistory();
  const params: any = useParams();
  const player = useSelector((state: RootState) => state.playerReducer);

  // State
  const [room, setRoom] = useState<Room | any>({ players: [] });

  const [isPlayerName, setIsPlayerName] = useState<boolean>(false);

  // Get Room data
  useEffect(() => {
    db.collection("rooms")
      .doc(params?.roomId)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setRoom(doc.data() as Room);
          console.log("doc.data()", doc.data());
        } else {
          history.push("/");
        }
      });
    ref.current = room;
  }, [isPlayerName]);

  // Update players when new user join to room
  useEffect(() => {
    if (player.name) {
      db.collection("rooms")
        .doc(params?.roomId)
        .update({
          players: [...room?.players, player],
        });
    }
  }, [isPlayerName]);

  // Update players when user leave room
  useEffect(() => {
    return () => {
      db.collection("rooms")
        .doc(params?.roomId)
        .update({
          players: ref.current?.players.filter(
            (p: any) => p.name !== player.name
          ),
        });
    };
  }, []);

  // Update players when user leave page
  useBeforeunload((event) => {
    db.collection("rooms")
      .doc(params?.roomId)
      .update({
        players: ref.current?.players.filter(
          (p: any) => p.name !== player.name
        ),
      });
  });

  return (
    <>
      {player.name ? ( // Container DIV
        <div className="grid w-screen grid-cols-1 md:grid-cols-2">
          <div
            className={tw(
              "flex flex-col justify-center md:items-end items-center md:mr-8 "
            )}
          >
            <PreSalaConfig room={room} roomId={params?.roomId} />
          </div>
          <div
            className={tw(
              "flex md:justify-start justify-center items-center md:ml-8 mt-5 md:mt-0"
            )}
          >
            <div className="w-96">
              <PreSalaPlayers players={room?.players} />
            </div>
          </div>
          <div className={tw("flex  w-screen items-center justify-center ")}>
            <ShareLink link={`${window.location.href}`} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-screen ">
          <p className="text-lg text-blue-100">
            Elige un nombre para poder unirte a la sala!
          </p>
          <PreSalaNoName setIsPlayerName={setIsPlayerName} />
        </div>
      )}
    </>
  );
};

export default PreSala;
