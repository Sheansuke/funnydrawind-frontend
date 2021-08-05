import React, { Dispatch, SetStateAction } from "react";
import { HomeCreateRoom } from "@components/HomeCreateRoom/HomeCreateRoom";

export interface PreSalaNoNameProps {
  setIsPlayerName?: (...args: any[]) => any;
}
export const PreSalaNoName: React.FC<PreSalaNoNameProps> = ({
  setIsPlayerName,
}) => {
  return (
    <div>
      <HomeCreateRoom isPlayeName={false} setIsPlayerName={setIsPlayerName} />
    </div>
  );
};
