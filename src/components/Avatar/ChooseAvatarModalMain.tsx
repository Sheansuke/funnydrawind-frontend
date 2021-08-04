import React, { useState } from "react";
import Modal from "react-modal";
import { tw } from "@utils/tailwindClass";
import { Button } from "@components/reusable/Button";

export interface ChooseAvatarModalProps {
  modalIsOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

Modal.setAppElement("#root");

// Style for Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ChooseAvatarModal: React.FC<ChooseAvatarModalProps> = ({
  modalIsOpen,
  setIsOpen,
}) => {
  const [url, setUrl] = useState<string>("");

  // Outline color to the input depend on the url state
  const [inputOutColor, setInputOutColor] = useState<string>(
    "border border-gray-200"
  );

  const closeModal = () => {
    setIsOpen(false);
    setInputOutColor("border border-gray-200");
  };

  const ready = () => {
    if (!url) return setInputOutColor("border border-red-500");
    setIsOpen(false);
    setInputOutColor("border border-gray-200");
  };

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <p className={tw("text-2xl mb-2")}>
        Pega aqui la URL de la imagen que deseas usar como avatar!
      </p>
      <input
        type="text"
        placeholder="Copia la URL de la imagen aqui!"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className={tw(
          "w-96",
          "shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
          inputOutColor,
          "mb-2"
        )}
      />

      <Button onClick={ready} text="¡Listo!" buttonbgColor="green" />
      <Button
        onClick={closeModal}
        text="Ya no quiero >:("
        buttonbgColor="red"
        tailwindClass={tw("m-1")}
      />
    </Modal>
  );
};
