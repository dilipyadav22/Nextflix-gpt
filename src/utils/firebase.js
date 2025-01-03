// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyjeofg9NQ-zcAbSbO9aheIqqx2hJey5I",
  authDomain: "netflixgpt-5beef.firebaseapp.com",
  projectId: "netflixgpt-5beef",
  storageBucket: "netflixgpt-5beef.firebasestorage.app",
  messagingSenderId: "79921426364",
  appId: "1:79921426364:web:1251129ccc174b9c6c05b9",
  measurementId: "G-J34HGDXTS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
