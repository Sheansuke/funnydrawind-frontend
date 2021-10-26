import React, { useState } from "react";
import Modal from "react-modal";
import { tw } from "@utils/tailwindClass";
import { Button } from "@components/reusable/Button";

export interface SelectWordProps {
  words: string[];
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
    backgroundColor: "rgba( 30, 41, 59, 0.25 )",

    backdropFilter: "blur (4px)",
  },
};
export const SelectWord: React.FC<SelectWordProps> = ({
  modalIsOpen,
  setIsOpen,
  words = [],
}) => {
  const [word1, word2, word3] = words;
  const closeModal = () => {
    setIsOpen(false);
  };

  const wordSelected = () => {
    alert("Letra seleccionada");
  };

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      <div className={tw("text-lg font-medium  text-center")}>
        <p className={tw(" text-yellow-900 ")}>Elige una palabra!</p>
        <div className={tw("grid grid-cols-3 p-8 gap-4")}>
          <Button text={word1} onClick={wordSelected} buttonbgColor="yellow" />
          <Button text={word2} onClick={wordSelected} buttonbgColor="blue" />
          <Button text={word3} onClick={wordSelected} buttonbgColor="green" />
        </div>
      </div>
    </Modal>
  );
};
