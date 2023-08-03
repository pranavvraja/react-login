// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuURU7ewgapAlFxUyGsH9kiTkDEsd7zJ4",
  authDomain: "react-login-83a9a.firebaseapp.com",
  projectId: "react-login-83a9a",
  storageBucket: "react-login-83a9a.appspot.com",
  messagingSenderId: "609446813208",
  appId: "1:609446813208:web:db81c367f4d5707562ed6d",
  measurementId: "G-559P0JHNRP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
