import React from "react";

import { tw } from "@utils/tailwindClass";

export interface ChatMessageProps {
  avatarUrl?: string;
  name?: string;
  message?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  avatarUrl = "",
  name = "",
  message = "",
}) => {
  return (
    <div
      className={tw(
        "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 rounded-lg bg-blue-100 ",
        "flex items-center justify-between"
      )}
    >
      <div className={tw("flex  ")}>
        {/* <Avatar url={avatarUrl} width={16} /> */}

        <div>
          <div className={tw("ml-2 font-semibold text-blue-100")}>{name}</div>
          <p className={tw("ml-2 text-green-100")}>{message}</p>
        </div>
      </div>
    </div>
  );
};
