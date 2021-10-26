import { db } from "@api/firebase/firebase";
import { Room } from "@api/models/room";

type options = "increment" | "decrement"


export const updateSecondsToDraw = async (room: Room, playerPosition: number, action: options, amount: number, reset: boolean) => {
    const operation = action == "increment" ? room.game.secondsRemaining + amount : room.game.secondsRemaining - amount;
    try {
        if (!reset) {
            await db.collection("rooms")
                .doc(room.id)
                .update({
                    game: {
                        ...room.game,
                        secondsRemaining: operation
                    },
                });
        } else {
            await db.collection("rooms")
                .doc(room.id)
                .update({
                    game: {
                        ...room.game,
                        secondsRemaining: room.game.secondsToDraw,
                        currentPlayer: room.players[playerPosition].name,
                        currentPlayerNumber: playerPosition
                    },
                });
        }
    } catch (error) {
        console.error(error);
    }
}