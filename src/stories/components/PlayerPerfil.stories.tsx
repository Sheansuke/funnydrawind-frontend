import React from "react";
import "../../index.css";
import { Meta } from "@storybook/react";
import {
  PlayerPerfil,
  PlayerPerfilProps,
} from "@components/PlayerPerfil/PlayerPerfil";

export default {
  component: PlayerPerfil,
  title: "Components/PlayerPerfil",
} as Meta;

export const PlayerPerfilComponent: React.VFC<PlayerPerfilProps> = (args) => (
  <PlayerPerfil {...args} />
);
