// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuT3nBdDAhQPwJzStV3T2R60FsDv433wg",
  authDomain: "janeland-net.firebaseapp.com",
  projectId: "janeland-net",
  storageBucket: "janeland-net.appspot.com",
  messagingSenderId: "840895384892",
  appId: "1:840895384892:web:ab6276be80bf358ee4a239",
  measurementId: "G-4D83XZT5E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);