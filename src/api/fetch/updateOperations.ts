import { db } from "@api/firebase/firebase";
import firebase from "firebase";

export const updateOperations = async (roomId: string, newOperation: any, reset: boolean) => {
    try {
        if (!reset) {
            db.collection("rooms")
                .doc(roomId)
                .update({
                    operations: firebase.firestore.FieldValue.arrayUnion(newOperation),
                });
        } else {
            db.collection("rooms")
                .doc(roomId)
                .update({
                    operations: newOperation,
                });
        }
    } catch (error) {
        console.error(error);
    }
}