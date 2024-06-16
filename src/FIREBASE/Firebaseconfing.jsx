// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjhhK0KiR6bJu6sMR_w6U22mvATV7Q2R4",
  authDomain: "e-shope-now.firebaseapp.com",
  projectId: "e-shope-now",
  storageBucket: "e-shope-now.appspot.com",
  messagingSenderId: "825344917226",
  appId: "1:825344917226:web:e499dd12deb2eb1691e193",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
