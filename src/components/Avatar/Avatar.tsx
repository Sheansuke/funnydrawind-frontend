import React from "react";
import { AvatarWidth, Width } from "@utils/enums/AvatarWidth";
import { avatarToChoose } from "@utils/avatarToChoose";
import { tw } from "@utils/tailwindClass";

export interface AvatarProps extends React.HTMLProps<HTMLDivElement> {
  width?: Width;
  url?: string;
  style?: React.CSSProperties;
  /* Property based on tw() function, add more tailwindcss class */
  tailwindClass?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  width = 20,
  url = avatarToChoose[1],
  tailwindClass,
}) => {
  return (
    <img
      src={url}
      alt="avatar"
      className={tw(
        width ? AvatarWidth[width] : AvatarWidth[width],
        width ? `h-${width}` : `h-${width}`,
        "rounded-full",
        "object-cover",
        "border-2 border-blue-300",
        tailwindClass
      )}
    />
  );
};
