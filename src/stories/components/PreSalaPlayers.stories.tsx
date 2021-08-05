import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import {
  PreSalaPlayers,
  PresaSalaPlayersProps,
} from "@components/PreSalaPlayers/PreSalaPlayers";

export default {
  component: PreSalaPlayers,
  title: "Components/PreSalaPlayers",
} as Meta;

const players = [
  {
    name: "Juan",
    avatarUrl: "",
    points: 10,
    rank: 1,
  },
  {
    name: "Pedro",
    avatarUrl: "",
    points: 20,
    rank: 2,
  },
  {
    name: "Pablo",
    avatarUrl: "",
    points: 30,
    rank: 3,
  },
];

export const PreSalaPlayersComponent: React.VFC<PresaSalaPlayersProps> = (
  args
) => <PreSalaPlayers players={players} />;
