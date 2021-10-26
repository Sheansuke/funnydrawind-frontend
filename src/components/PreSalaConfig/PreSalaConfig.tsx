import React, { useEffect, memo } from "react";
import { useForm } from "react-hook-form";
import { tw } from "@utils/tailwindClass";
import { Room } from "@api/models/room";

// firebase
import { db } from "@api/firebase/firebase";

// react-router-dom
import { useHistory } from "react-router-dom";

// redux
import { RootState } from "@redux/store";
import { useSelector } from "react-redux";

// components
import { Button } from "@components/reusable/Button";

export interface PreSalaConfigProps {
  room: Room;
  roomId?: string;
}

interface FormData {
  rounds?: string;
  secondsToDraw?: string;
  extraWords?: string;
}

const PreSalaConfig: React.FC<PreSalaConfigProps> = ({ room, roomId }) => {
  const history = useHistory();
  const player = useSelector((state: RootState) => state.playerReducer);

  // if game start push to sala
  useEffect(() => {
    if (room?.game?.isStart) {
      history.push(`/sala`, { room, roomId: room.id });
    }
  }, [room]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormData) => {
    const rounds = data?.rounds;
    const secondsToDraw = data?.secondsToDraw;
    const extraWords = data?.extraWords;

    // convert string to array of words
    const extraWordsArray = extraWords?.split(",");

    db.collection("rooms")
      .doc(room.id)
      .update({
        game: {
          ...room?.game,
          isStart: true,
          rounds: Number(rounds),
          secondsToDraw: Number(secondsToDraw),
          secondsRemaining: Number(secondsToDraw),
          extraWords: extraWordsArray,
          words: [...room?.game?.words].concat(extraWordsArray ?? []),
        },
      });
  };

  return (
    <div
      className={tw(
        " w-96 h-100 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-lg   ",
        "p-4"
      )}
    >
      <h2 className={tw("text-3xl text-blue-100 text-center mb-4 font-normal")}>
        Configuración
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={tw("flex flex-col gap-4")}
      >
        <div>
          <label className={tw("text-2xl text-blue-100")}>Rondas</label>
          <select
            {...register("rounds")}
            disabled={player?.name === room?.creator ? false : true}
            placeholder="Rondas"
            className={tw(
              "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
              "w-full"
            )}
          >
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select>
        </div>

        <div>
          <label className={tw("text-2xl text-blue-100")}>
            Segundos para dibujar
          </label>
          <select
            {...register("secondsToDraw")}
            disabled={player?.name === room?.creator ? false : true}
            placeholder="Segundos para dibujar"
            className={tw(
              "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
              "w-full"
            )}
          >
            <option value="30">30</option>
            <option value="60">60</option>
            <option value="90">90</option>
            <option value="120">120</option>
          </select>
        </div>

        <div>
          <label className={tw("text-2xl text-blue-100")}>
            Agregar Palabras
          </label>
          <input
            type="text"
            {...register("extraWords")}
            disabled={player?.name === room?.creator ? false : true}
            placeholder="Escriba las palabras separadas
          por una coma."
            className={tw(
              "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
              "w-full"
            )}
          />
        </div>

        <div className={tw("flex justify-center")}>
          <Button
            disabled={player?.name === room?.creator ? false : true}
            text="¡Empezar!"
            type="submit"
            buttonbgColor={player?.name === room?.creator ? "green" : "gray"}
            tailwindClass={tw(
              "w-full h-16 mt-4 ",
              player?.name !== room?.creator && "cursor-not-allowed"
            )}
          />
        </div>
      </form>
    </div>
  );
};

export default memo(PreSalaConfig);
