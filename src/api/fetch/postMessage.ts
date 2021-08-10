import { db } from "@api/firebase/firebase";
import IMessage from "@api/models/message";
import IPlayer from "@api/models/player";

export const postMessage = async (roomId: string, messages: IMessage[], player: IPlayer, message: string) => {
    try {
        db.collection("rooms")
            .doc(roomId)
            .update({
                chat: [
                    ...messages,
                    {
                        avatar: player.avatarUrl,
                        name: player.name,
                        message: message,
                    },
                ],
            });
    } catch (error) {
        console.log(error);
    }
}