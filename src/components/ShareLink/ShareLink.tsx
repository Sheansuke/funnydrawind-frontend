import React, { useState, useEffect } from "react";
import { tw } from "@utils/tailwindClass";
import { Button } from "@components/reusable/Button";

export interface ShareLinkProps {
  link: string;
}

export const ShareLink: React.FC<ShareLinkProps> = ({ link = "" }) => {
  const [linkCopy, setLinkCopy] = useState(false);

  const copyLink = () => {
    navigator?.clipboard?.writeText(link);
    setLinkCopy(true);
  };

  useEffect(() => {
    const copyTime = setTimeout(() => {
      setLinkCopy(false);
    }, 1000);

    return () => {
      clearTimeout(copyTime);
    };
  }, [linkCopy]);

  return (
    <div>
      <h2
        className={tw("text-lg text-blue-100 text-center mb-4 font-semibold")}
      >
        ¡Comparte este link para jugar con tus amigos!
      </h2>

      <div className={tw("flex gap-2")}>
        <input
          type="text"
          placeholder="Link para compartir"
          value={link ? link : ""}
          readOnly
          className={tw(
            "shadow appearance-none  rounded py-2 px-3 text-gray-700 leading-tight  focus:outline-none focus:shadow-outline",
            "w-full"
          )}
        />
        <Button text={!linkCopy ? "Copiar" : "¡Copiado!"} onClick={copyLink} />
      </div>
    </div>
  );
};
