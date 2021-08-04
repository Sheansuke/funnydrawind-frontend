import React from "react";
import { tw } from "@utils/tailwindClass";
import { ButtonColors, Colors } from "@utils/enums/ButtonColors";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonbgColor?: Colors;
  text: string;
  /* Property based on tw() function, add more tailwindcss class */
  tailwindClass?: string;
}

export const Button: React.FC<ButtonProps> = ({
  buttonbgColor,
  text = "Some Text",
  tailwindClass,
  ...props
}) => {
  return (
    <button
      {...props}
      className={tw(
        ` ${
          buttonbgColor
            ? ButtonColors[buttonbgColor]
            : "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        }`,
        tailwindClass
      )}
    >
      {text}
    </button>
  );
};
