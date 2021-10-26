import React, { useEffect, useRef } from "react";
import { tw } from "@utils/tailwindClass";
import { useForm } from "react-hook-form";
import { ChatMessageProps } from "@components/Chat/ChatMessage";
import { ChatMessage } from "@components/Chat/ChatMessage";
import { motion } from "framer-motion";

// firebase
import { postMessage } from "@api/fetch/postMessage";
import IPlayer from "@api/models/player";

export interface ChatProps {
  messages: ChatMessageProps[];
  player: IPlayer;
  roomId: string;
}

// COMPONENT
export const Chat: React.FC<ChatProps> = ({
  messages = [],
  player,
  roomId,
}) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    postMessage(roomId, messages, player, data.message);
    reset();
  };

  // this allow auto-scrool when sending a message
  const messageEl = useRef<any>(null);
  const chatMessageLiRef = useRef<any>(null);
  useEffect(() => {
    if (messageEl) {
      messageEl?.current?.addEventListener("DOMNodeInserted", (event: any) => {
        const { currentTarget: target } = event as any;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <div
      className={tw(
        " h-101 flex flex-col bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-lg shadow-lg  p-2  "
      )}
    >
      <h2 className={tw("text-3xl text-blue-100 text-center mb-4 font-normal")}>
        Chat
      </h2>

      <ul
        className={tw(
          "flex flex-col flex-grow overflow-y-scroll scrollbar-hide gap-2 "
        )}
        ref={messageEl}
      >
        {messages.length > 0 ? (
          <>
            {messages?.map((message, index) => (
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <li key={index} ref={chatMessageLiRef}>
                  <ChatMessage
                    name={message?.name}
                    avatarUrl={message?.avatarUrl}
                    message={message?.message}
                  />
                </li>
              </motion.div>
            ))}
          </>
        ) : (
          <p className={tw("text-lg text-yellow-500")}>Vamos no sean timidos</p>
        )}
      </ul>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={tw("flex flex-col flex-none ")}
      >
        <input
          autoComplete="off"
          placeholder="Hola soy el chat :)"
          {...register("message", { required: true })}
          className={tw(
            "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
            "bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60",
            "w-full"
          )}
        />

        <input type="submit" className="hidden" />
      </form>
    </div>
  );
};
