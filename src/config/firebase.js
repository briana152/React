import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVu3tpbqgvqIei50srsX4XqdAKjAf2eMM",
  authDomain: "notes-app-a8df3.firebaseapp.com",
  projectId: "notes-app-a8df3",
  storageBucket: "notes-app-a8df3.appspot.com",
  messagingSenderId: "724861202804",
  appId: "1:724861202804:web:432ce272d03ba805233c21",
  measurementId: "G-9QC0P30R4C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
