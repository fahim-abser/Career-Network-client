// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxAazAt4CbRHIh998nDIhQYdp4W0uvPAs",
  authDomain: "career-network-76558.firebaseapp.com",
  projectId: "career-network-76558",
  storageBucket: "career-network-76558.appspot.com",
  messagingSenderId: "744443339381",
  appId: "1:744443339381:web:7bf834c73453423dfe8e3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

