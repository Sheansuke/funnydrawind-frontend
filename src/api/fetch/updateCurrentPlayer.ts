import { db } from "@api/firebase/firebase";
import { Room } from "@api/models/room";

export const updateCurrentPlayer = async (room: Room, playerPosition: number) => {

    try {

        await db.collection("rooms")
            .doc(room.id)
            .update({
                game: {
                    ...room.game,
                    currentPlayer: room.players[playerPosition].name
                }
            });

    } catch (error) {
        console.error(error);
    }
}