import { db } from "@api/firebase/firebase";
import IPlayer from "@api/models/player";

export const updatePlayers = async (roomId: string, players: IPlayer[], player: IPlayer) => {

    try {
        db.collection("rooms")
            .doc(roomId)
            .update({
                players: [...players, player],
            });
    } catch (error) {
        console.error(error);
    }
}