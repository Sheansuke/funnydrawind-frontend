import { db } from "@api/firebase/firebase";

export const getOperations = (roomId: string, setOperations: (...args: any[]) => any) => {
    try {
        db.collection("rooms")
            .doc(roomId)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const roomOperations = doc.data();
                    setOperations(roomOperations?.operations);
                }
            });
    } catch (error) {
        console.log(error)
    }
}