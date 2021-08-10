import { db } from "@api/firebase/firebase";
import IPlayer from "@api/models/player";


export const createRoom = async (creator: string, player: IPlayer): Promise<string> => {
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
            extraWords: [],


        },
        operations: [],
        players: [],
        chat: []
    }).then(doc => doc)

    return newRoom.id
}