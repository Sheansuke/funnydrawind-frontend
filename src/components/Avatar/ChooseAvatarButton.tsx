import React, { useState } from "react";
import { Button } from "@components/reusable/Button";
import { ChooseAvatarModal } from "@components/Avatar/ChooseAvatarModal";
import { avatarToChoose } from "@utils/avatarToChoose";

export interface ChooseAvatarButtonProps {
  /* Property based on tw() function, add more tailwindcss class */
  tailwindClass?: string;
}

export const ChooseAvatarButton: React.FC<ChooseAvatarButtonProps> = ({
  tailwindClass,
}) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <ChooseAvatarModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        avatarsImage={avatarToChoose}
      />
      <Button text="Elegir Avatar" onClick={openModal} />
    </div>
  );
};
