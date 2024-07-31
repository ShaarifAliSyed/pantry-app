// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo6M7a9ZFmRbfvpd2RP4cnBeH8WST3PBk",
  authDomain: "hspantryapp-3e7de.firebaseapp.com",
  projectId: "hspantryapp-3e7de",
  storageBucket: "hspantryapp-3e7de.appspot.com",
  messagingSenderId: "799805043708",
  appId: "1:799805043708:web:d4c4519b3161f7fb70f879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}