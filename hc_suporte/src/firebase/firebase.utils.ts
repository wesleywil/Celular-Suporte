import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA8f7ZKMJDhr---F3wdvxJQsleHVQuhKRI",
    authDomain: "hc-suporte.firebaseapp.com",
    projectId: "hc-suporte",
    storageBucket: "hc-suporte.appspot.com",
    messagingSenderId: "430710885800",
    appId: "1:430710885800:web:a507705e795890ac64e19d",
    measurementId: "G-RP980QZ6JX"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();