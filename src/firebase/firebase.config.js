// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhX8FvONT0O_y6mPypcdj7wfECgDl_uu4",
  authDomain: "dragon-news-firebase-fdcaf.firebaseapp.com",
  projectId: "dragon-news-firebase-fdcaf",
  storageBucket: "dragon-news-firebase-fdcaf.appspot.com",
  messagingSenderId: "583510680704",
  appId: "1:583510680704:web:7797f210266c1dad437265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;