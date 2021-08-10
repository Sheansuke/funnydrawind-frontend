import { db } from "@api/firebase/firebase";
import { Room } from "@api/models/room";

// redux
import { AppDispatch } from "@redux/store";
import { setRoomGlobalState } from "@redux/room/roomSlice";

export const getRoom = (roomId: string, dispatch: AppDispatch, history: any) => {
    try {
        db.collection("rooms")
            .doc(roomId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const data: Room = doc.data() as Room;

                    dispatch(
                        setRoomGlobalState({
                            id: roomId,
                            creator: data.creator,
                            createAt: data.createAt,
                            game: data.game,
                            players: data.players,
                            chat: data.chat,
                            operations: data.operations,
                        })
                    );
                } else {
                    history.push("/");
                }
            });
    } catch (error) {
        console.log(error);

    }
}