import { Game } from "@api/models/game";
import { Player } from "@api/models/player";
import { Chat } from "@api/models/chat";

import { PlayerPerfilProps } from "@components/PlayerPerfil/PlayerPerfil";

export interface Room {
    creator: string;
    createAt: string;
    game: Game;
    players: PlayerPerfilProps[];
    chat: Chat[];
}



