import { db } from "@api/firebase/firebase";
import firebase from "firebase";

export const updateOperations = async (roomId: string, newOperation: any) => {
    try {
        db.collection("rooms")
            .doc(roomId)
            .update({
                operations: firebase.firestore.FieldValue.arrayUnion(newOperation),
            });
    } catch (error) {
        console.error(error);
    }
}