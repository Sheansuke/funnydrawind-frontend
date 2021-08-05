import { db } from "@api/firebase/firebase";
import { Player } from "@api/models/player";


export const createRoom = async (creator: string, player: Player) => {
    const newRoom = await db.collection("rooms").add({
        creator: creator,
        createdAt: new Date().toISOString(),
        game: {
            isStart: false,
            isEnd: false,
            rounds: 3,
            currentRound: 1,
            currentPlayer: creator,
            secondsToDraw: 30,
            secondsRemaining: 30,
            extraWords: []
        },
        players: [],
        chat: []
    }).then(doc => doc)

    return newRoom.id
}