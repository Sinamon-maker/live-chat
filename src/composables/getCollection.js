import { ref, watchEffect } from "vue";

import { db } from "../firebase/config";
import { collection, onSnapshot } from "firebase/firestore";

const getCollection = (collectionName) => {
  const documents = ref(null);
  const error = ref(null);

  let colRef = collection(db, collectionName);

  const unsub = onSnapshot(
    colRef,
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });
      documents.value = results;
    },
    (err) => {
      console.log(err.message);
      error.value = err.message;
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { documents, error };
};

export default getCollection;
