import React, { useState, Dispatch, SetStateAction } from "react";
import { tw } from "@utils/tailwindClass";
import { Avatar } from "@components/Avatar/Avatar";
import { ChooseAvatarButton } from "@components/Avatar/ChooseAvatarButton";
import { Button } from "@components/reusable/Button";
import { useHistory } from "react-router-dom";

// firebase
import { db } from "@api/firebase/firebase";

// redux
import { RootState } from "@redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setPlayer } from "@redux/player/playerSlice";
import { setRoomId } from "@redux/roomId/roomIdSlice";

// api
import { createRoom } from "@api/fetch/createRoom";

export interface HomeCreateRoomProps {
  isPlayeName?: boolean;
  setIsPlayerName?: (...args: any[]) => any;
}

export const HomeCreateRoom: React.FC<HomeCreateRoomProps> = ({
  isPlayeName = true,
  setIsPlayerName,
}) => {
  const [playerName, setPlayerName] = useState("");
  const history = useHistory<any>();

  // redux
  const player = useSelector((state: RootState) => state.playerReducer);

  const dispatch = useDispatch();

  const newRoom = async () => {
    if (!playerName) return alert("No vas a jugar sin nombre de jugador o si?");

    // create Room on firebase and return id
    const newRoomId = await createRoom(playerName, {
      avatarUrl: player.avatarUrl,
      name: playerName,
      points: 0,
      rank: 0,
    });

    // update player on state
    if (newRoomId) {
      dispatch(
        setPlayer({
          avatarUrl: player.avatarUrl,
          name: playerName,
          points: 0,
          rank: 0,
        })
      );

      // update roomId on state
      dispatch(
        setRoomId({
          roomId: newRoomId,
        })
      );

      history.push(`/preSala/${newRoomId}`);
    }
  };

  const preSala = history?.location?.state?.from.match(/preSala/g)[0];
  const noPlayerName = history?.location?.state?.hasPlayerName;

  const goToRoom = () => {
    if (setIsPlayerName) {
      dispatch(
        setPlayer({
          avatarUrl: player.avatarUrl,
          name: playerName,
          points: 0,
          rank: 0,
        })
      );
      setIsPlayerName(true);
    }
  };

  return (
    //   Container DIV
    <div
      className={tw(
        "w-80 h-72 flex justify-center items-center shadow-lg rounded-lg  ",
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  "
      )}
    >
      {/* Sub container DIV */}

      <div className={tw("w-60")}>
        {/* Avatar and ChooseAvatar DIV */}
        <div className={tw("h-24 flex justify-between items-center mb-2")}>
          <Avatar url={player.avatarUrl ?? ""} />
          <ChooseAvatarButton />
        </div>

        {/* Nombre de Jugador */}
        <input
          type="text"
          placeholder="Nombre de Jugador"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className={tw(
            "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
            "w-full"
          )}
        />

        {/* Crear Sala */}

        {isPlayeName ? (
          <Button
            text="Crear Sala"
            onClick={newRoom}
            tailwindClass={tw("w-full h-16 mt-4")}
            buttonbgColor="green"
          />
        ) : (
          <Button
            text="Estoy listo!"
            onClick={goToRoom}
            tailwindClass={tw("w-full h-16 mt-4")}
            buttonbgColor="green"
          />
        )}
      </div>
    </div>
  );
};
