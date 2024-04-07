// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiKMSraXsqLQ3PaJ7CMXCY86gwYklyAGw",
  authDomain: "portfolio-1ee1b.firebaseapp.com",
  projectId: "portfolio-1ee1b",
  storageBucket: "portfolio-1ee1b.appspot.com",
  messagingSenderId: "789963330809",
  appId: "1:789963330809:web:4302d35843d185981d3e28",
  measurementId: "G-6BLPM8Q4YR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth(app)

export {auth,provider}