import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxhHA6A-NWSUHxYgNIqlVydoJjliLuSZM",
  authDomain: "hormigas-chat-4893b.firebaseapp.com",
  projectId: "hormigas-chat-4893b",
  storageBucket: "hormigas-chat-4893b.appspot.com",
  messagingSenderId: "284417397947",
  appId: "1:284417397947:web:e6fc70598d23ddf502859e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
