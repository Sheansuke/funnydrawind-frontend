import React from "react";
import { tw } from "@utils/tailwindClass";
import { Avatar } from "@components/Avatar/Avatar";
import { ChooseAvatarButton } from "@components/Avatar/ChooseAvatarButton";
import { Button } from "@components/reusable/Button";

export const HomeCreateRoom: React.FC = () => {
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
          <Avatar />
          <ChooseAvatarButton />
        </div>

        {/* Nombre de Jugador */}
        <input
          type="text"
          placeholder="Nombre de Jugador"
          className={tw(
            "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
            "w-full"
          )}
        />

        {/* Crear Sala */}
        <Button
          text="Crear Sala"
          tailwindClass={tw("w-full h-16 mt-4")}
          buttonbgColor="green"
        />
      </div>
    </div>
  );
};
