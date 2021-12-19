import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyB8d_Qx4nmIOyTG_gRaoXbJGZOhzENu9sY",
  authDomain: "meadheads-db.firebaseapp.com",
  projectId: "meadheads-db",
  storageBucket: "meadheads-db.appspot.com",
  messagingSenderId: "1077482910041",
  appId: "1:1077482910041:web:58a323c9d5176483b05c48",
  measurementId: "G-XEYPBZTZ26",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
