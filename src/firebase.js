// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOUF95cCmRjiMPJ-m8t-Z3kQY60AF8rls",
  authDomain: "react-material-todo.firebaseapp.com",
  projectId: "react-material-todo",
  storageBucket: "react-material-todo.appspot.com",
  messagingSenderId: "1092036030547",
  appId: "1:1092036030547:web:c6c0546763a17b821256a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db