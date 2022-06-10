import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBq2ROJ8CYPGbPl_sZodrLI0LDpqH6B0Ik",
  authDomain: "food-delivery-app-ca37c.firebaseapp.com",
  databaseURL:
    "https://food-delivery-app-ca37c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "food-delivery-app-ca37c",
  storageBucket: "food-delivery-app-ca37c.appspot.com",
  messagingSenderId: "572929666398",
  appId: "1:572929666398:web:e7bd8649464c433c88b3cf",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };
