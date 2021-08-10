import React from "react";
import Modal from "react-modal";
import { tw } from "@utils/tailwindClass";
import { Button } from "@components/reusable/Button";
import { Avatar } from "@components/Avatar/Avatar";

// redux
import { useDispatch } from "react-redux";
import { setPlayer } from "@redux/player/playerSlice";

export interface ChooseAvatarModalProps {
  modalIsOpen: boolean;
  avatarsImage: string[];
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

export const ChooseAvatarModal: React.FC<ChooseAvatarModalProps> = ({
  modalIsOpen,
  avatarsImage = [],
  setIsOpen,
}) => {
  const dispatch = useDispatch();

  const closeModal = () => {
    setIsOpen(false);
  };

  const chooseAvatar = (e: any) => {
    dispatch(
      setPlayer({
        avatarUrl: e?.target?.currentSrc,
      })
    );

    closeModal();
  };

  return (
    <Modal isOpen={modalIsOpen} style={customStyles}>
      {/* Avatars container */}
      <div className={tw("grid grid-cols-4 gap-2 ")}>
        {avatarsImage?.length > 0 ? (
          avatarsImage?.map((avatar) => (
            <Avatar
              key={avatar}
              url={avatar}
              onClick={chooseAvatar}
              tailwindClass={tw(
                "cursor-pointer transform transition hover:scale-110"
              )}
            />
          ))
        ) : (
          <p className={tw("text-lg text-yellow-500")}>
            Juraria que aqui puse algunos avatars...
          </p>
        )}
      </div>

      <Button
        onClick={closeModal}
        text="Ya no quiero >:("
        buttonbgColor="red"
        tailwindClass={tw("mt-5")}
      />
    </Modal>
  );
};
