
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBo0tVAjP5n_iTI7TH0N42v0J2t61IzNrQ",
  authDomain: "entertainment-hub-ca10e.firebaseapp.com",
  projectId: "entertainment-hub-ca10e",
  storageBucket: "entertainment-hub-ca10e.appspot.com",
  messagingSenderId: "625666886406",
  appId: "1:625666886406:web:021cbfaf49d703391a6c87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


