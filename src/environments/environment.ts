import { initializeApp } from "firebase/app";
import { Messaging } from './../../node_modules/@angular/fire/messaging/messaging.d';
export const firebaseConfig = {
  apiKey: "AIzaSyAQeenwkbIVvfOlW6mdoyvtS0M2kDq33yA",
  authDomain: "prueba-tauruu-a7c7c.firebaseapp.com",
  projectId: "prueba-tauruu-a7c7c",
  storageBucket: "prueba-tauruu-a7c7c.appspot.com",
  messagingSenderId: "1019378101971",
  appId: "1:1019378101971:web:83fa24814d919d5e57ae26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
