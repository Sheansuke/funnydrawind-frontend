import { db } from "@api/firebase/firebase";

export const getNews = async (setNewsItems: (...args: any[]) => any) => {
    try {
        db.collection("news")
            .get()
            .then((querySnapshot) => {
                const newsItemsCollection = querySnapshot.docs.map((doc) => doc.data());
                // do something with documents

                setNewsItems(newsItemsCollection);
            });
    } catch (error) {
        console.log(error)
    }
}