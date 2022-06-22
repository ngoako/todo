// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBDIbaoLYVWQMbI7OIw140bUrrHYhW2i4",
  authDomain: "learning-bbd01.firebaseapp.com",
  projectId: "learning-bbd01",
  storageBucket: "learning-bbd01.appspot.com",
  messagingSenderId: "37689021377",
  appId: "1:37689021377:web:8303996fe5d6fe60089540",
  measurementId: "G-VN3TLXXVYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);