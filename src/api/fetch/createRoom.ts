import { db } from "@api/firebase/firebase";
import IPlayer from "@api/models/player";


export const createRoom = async (creator: string, player: IPlayer, language: string): Promise<string> => {

    const wordsLang = await db.collection("words").doc(language).get().then(doc => doc.data());


    const newRoom = await db.collection("rooms").add({
        creator: creator,
        createdAt: new Date().toISOString(),
        game: {
            isStart: false,
            isEnd: false,
            rounds: 3,
            currentRound: 1,
            currentPlayer: creator,
            currentPlayerNumber: 0,
            secondsToDraw: 30,
            secondsRemaining: 30,
            words: wordsLang?.words,
            extraWords: [],


        },
        operations: [],
        players: [],
        chat: []
    }).then(doc => doc)

    return newRoom.id
}