// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSp8yVjDtzdz-JkW-KZfkckR1wZIxyQzI",
  authDomain: "homework5-d7866.firebaseapp.com",
  projectId: "homework5-d7866",
  storageBucket: "homework5-d7866.firebasestorage.app",
  messagingSenderId: "786276526955",
  appId: "1:786276526955:web:d4563a30e0b2b8c2353a2e",
  measurementId: "G-XYYMTZRW2Y"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);