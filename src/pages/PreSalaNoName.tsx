import React from "react";
import { HomeCreateRoom } from "@components/HomeCreateRoom/HomeCreateRoom";

export interface PreSalaNoNameProps {
  isName: boolean;
}
export const PreSalaNoName: React.FC<PreSalaNoNameProps> = ({
  isName = false,
}) => {
  return (
    <div>
      <HomeCreateRoom isName={isName} />
    </div>
  );
};
