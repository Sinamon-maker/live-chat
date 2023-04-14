import { ref } from "vue";

import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);

const signup = async (email, password, displayName) => {
  error.value = null;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    if (!res) {
      throw new Error("Could not complete signup");
    }
    error.value = null;
    await updateProfile(auth.currentUser, { displayName });

    return res;
  } catch (err) {
    if (err.message.startsWith("Firebase")) {
      error.value = err.message.replace("Firebase:", "");
    } else {
      error.value = err.message;
    }
  }
};

const useSignup = () => {
  return { error, signup };
};
export default useSignup;
