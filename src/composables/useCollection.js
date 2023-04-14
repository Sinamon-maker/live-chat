import { ref } from "vue";

import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDocument = async (doc) => {
    error.value = null;
    try {
      const refDoc = collection(db, collectionName);
      await addDoc(refDoc, doc);
    } catch (err) {
      console.log(err.message);
      error.value = "could not send the message";
    }
  };
  return { error, addDocument };
};

export default useCollection;
