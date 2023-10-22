// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
 
 //Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0PdERRjDViGWQqjjxULOotyyilwdG-EA",
  authDomain: "abcbookies.firebaseapp.com",
  projectId: "abcbookies",
  storageBucket: "abcbookies.appspot.com",
  messagingSenderId: "606526871429",
  appId: "1:606526871429:web:825c0570f5bd38bce216ec",
  measurementId: "G-577644C9RR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {analytics,firestore,auth,storage}