// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtWa1_3IYxC2kWe-KnXKebWKZBXcGqvwI",
  authDomain: "webapp-a80fd.firebaseapp.com",
  projectId: "webapp-a80fd",
  storageBucket: "webapp-a80fd.firebasestorage.app",
  messagingSenderId: "524808282470",
  appId: "1:524808282470:web:9e529028b4ffdec1a2a8a7",
  measurementId: "G-LHVBXF7V7K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);