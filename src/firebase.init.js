// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYPadsxg7eaRcB2iFpQo3iaHoOVrv2DSY",
  authDomain: "practice-email-password.firebaseapp.com",
  projectId: "practice-email-password",
  storageBucket: "practice-email-password.appspot.com",
  messagingSenderId: "1030641538011",
  appId: "1:1030641538011:web:fd737832aee0dff5288dfe",
  measurementId: "G-S8PLRWJXQ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;