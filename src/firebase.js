// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSw8SECM7J_snsaTZl6Bmyfr-GuUP9Rao",
  authDomain: "jobandsocial.firebaseapp.com",
  projectId: "jobandsocial",
  storageBucket: "jobandsocial.appspot.com",
  messagingSenderId: "805532186237",
  appId: "1:805532186237:web:2c6b938dea56c007052314",
  databaseURL:'https://jobandsocial-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const database = getDatabase(app)
export {database, auth}