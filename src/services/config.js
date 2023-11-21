
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "celular-shop.firebaseapp.com",
  projectId: "celular-shop",
  storageBucket: "celular-shop.appspot.com",
  messagingSenderId: "563739131821",
  appId: "1:563739131821:web:78f7071c03c389daceab24"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
