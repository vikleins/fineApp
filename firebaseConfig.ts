import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCzXyPeJFIoicPfqkTfVCucmEQHCcM00Zk",
  authDomain: "fineapp-test2.firebaseapp.com",
  projectId: "fineapp-test2",
  storageBucket: "fineapp-test2.appspot.com",
  messagingSenderId: "524738868515",
  appId: "1:524738868515:web:80ea61d8b3c2bcc2794896"
};

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIRESTPRE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
