import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBVKMjLImxR1XOuf3Ie_9_95YoRZoZC5z4",
  authDomain: "fineapp-firebase.firebaseapp.com",
  projectId: "fineapp-firebase",
  storageBucket: "fineapp-firebase.appspot.com",
  messagingSenderId: "423776807875",
  appId: "1:423776807875:web:c543bc81b437943b4c6b76",
  measurementId: "G-6C4G8W92Z5"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTPRE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
