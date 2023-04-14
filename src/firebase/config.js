import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa_4ZD4mcJVTIDKvWfHlO2_pzJUeqTC4g",
  authDomain: "dojo-blog-f8767.firebaseapp.com",
  projectId: "dojo-blog-f8767",
  storageBucket: "dojo-blog-f8767.appspot.com",
  messagingSenderId: "387308844466",
  appId: "1:387308844466:web:b5532c285eb3f7a5d960ab",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
