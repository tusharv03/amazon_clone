// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeyxlSMU9fnt9LT5ihFjGlDl9hxf2q_EM",
  authDomain: "clone-3194a.firebaseapp.com",
  projectId: "clone-3194a",
  storageBucket: "clone-3194a.appspot.com",
  messagingSenderId: "152410974632",
  appId: "1:152410974632:web:72ed672b8d3e602e4a959d",
  measurementId: "G-TVE3V7DR1P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
