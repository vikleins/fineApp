// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjPtBRkvuef4FYDQTF0uIUObz51eEDJGk",
  authDomain: "fine-app-def.firebaseapp.com",
  projectId: "fine-app-def",
  storageBucket: "fine-app-def.appspot.com",
  messagingSenderId: "277208762627",
  appId: "1:277208762627:web:162a9d5e8cb0fee5334136"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB =  getFirestore(FIREBASE_APP)