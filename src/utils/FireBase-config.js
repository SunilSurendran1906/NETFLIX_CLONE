// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQtdq3sWEp4GLGXDn5hrKRZ5RcqUjs5s0",
  authDomain: "netflix-clone-demo-1906.firebaseapp.com",
  projectId: "netflix-clone-demo-1906",
  storageBucket: "netflix-clone-demo-1906.appspot.com",
  messagingSenderId: "182666323357",
  appId: "1:182666323357:web:ae39f0bbedd7b03de6fb74",
  measurementId: "G-F8S7HX4V0J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
