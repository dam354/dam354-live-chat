import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBNEc0kLtXt4abJzEqxbMEQcXp5r7DoSEA",
  authDomain: "vue-firebase-dam354.firebaseapp.com",
  projectId: "vue-firebase-dam354",
  storageBucket: "vue-firebase-dam354.appspot.com",
  messagingSenderId: "542152001144",
  appId: "1:542152001144:web:2148e88a47a655ff794f8d",
};

firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFireStore, timestamp };
