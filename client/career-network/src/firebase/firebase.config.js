// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArbCOQa2tgkFJI8nLii5Dz4YVhvs69WuE",
  authDomain: "career-network-83660.firebaseapp.com",
  projectId: "career-network-83660",
  storageBucket: "career-network-83660.appspot.com",
  messagingSenderId: "261709196207",
  appId: "1:261709196207:web:74fde9964b45a95e08dd5a",
  measurementId: "G-H85HMXMMKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

