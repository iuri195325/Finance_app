import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD5ChHfr8bjnZa1kMmty9YIVBfIwXWLwG4",
  authDomain: "finaceapp-fca85.firebaseapp.com",
  projectId: "finaceapp-fca85",
  storageBucket: "finaceapp-fca85.appspot.com",
  messagingSenderId: "97630521333",
  appId: "1:97630521333:web:ed0401ce1cc816a1a782bc"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);