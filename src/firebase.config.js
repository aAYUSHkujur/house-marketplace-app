import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSL36T9f9ou3bzuVHEGRW8_JRAF4gME10",
  authDomain: "house-marketplace-app-de49f.firebaseapp.com",
  projectId: "house-marketplace-app-de49f",
  storageBucket: "house-marketplace-app-de49f.appspot.com",
  messagingSenderId: "368539069253",
  appId: "1:368539069253:web:3e832ea7513ec07ab32c2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
