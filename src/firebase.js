// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const firebaseConfig = {
  apiKey: "AIzaSyBjB__a_SxIfVsAze7nhBiAHIMGolUPnE4",
  authDomain: "contactformportfolio-50f81.firebaseapp.com",
  projectId: "contactformportfolio-50f81",
  storageBucket: "contactformportfolio-50f81.appspot.com",
  messagingSenderId: "756382036974",
  appId: "1:756382036974:web:bfb8bfcc2cc7a9d9a054ff",
  measurementId: "G-DE6LF20V6S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
