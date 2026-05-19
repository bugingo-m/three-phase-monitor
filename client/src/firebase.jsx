
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/database'
//import database from "firebase/database";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-qW9lUMF-HoLVyglEsUZQyVExNETXXFo",
  authDomain: "three-phase-monitor.firebaseapp.com",
  databaseURL: "https://three-phase-monitor-default-rtdb.firebaseio.com",
  projectId: "three-phase-monitor",
  storageBucket: "three-phase-monitor.firebasestorage.app",
  messagingSenderId: "984382110268",
  appId: "1:984382110268:web:e131c51ef7cd9bdd14e139",
  measurementId: "G-T862WR7WJH"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//export const db = getDatabase(app); // Export the database instance