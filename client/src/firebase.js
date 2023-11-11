// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3e412.firebaseapp.com",
  projectId: "mern-estate-3e412",
  storageBucket: "mern-estate-3e412.appspot.com",
  messagingSenderId: "435661725596",
  appId: "1:435661725596:web:ac63a9dd25f3335d8e3259"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);