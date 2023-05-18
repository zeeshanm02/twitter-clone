// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK7Q2ncfJxLTn87IcMK_hdo3qZ5FtR8Tg",
  authDomain: "twitter-clone-b33c3.firebaseapp.com",
  projectId: "twitter-clone-b33c3",
  storageBucket: "twitter-clone-b33c3.appspot.com",
  messagingSenderId: "170168641948",
  appId: "1:170168641948:web:1c78fbad4b197682d04059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);