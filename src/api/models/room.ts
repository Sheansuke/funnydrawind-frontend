import { Game } from "@api/models/game";
import Player from "@api/models/player";
import IChat from "@api/models/chat";
export interface Room {
    id: string;
    creator: string;
    createAt: string;
    game: Game;
    players: Player[];
    chat: IChat[];
    operations: Array<any>;
}



