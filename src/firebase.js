import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBYri2FvOp57B7FNroyY6mzK6kg8SwiR6k",
  authDomain: "clone-9d059.firebaseapp.com",
  projectId: "clone-9d059",
  storageBucket: "clone-9d059.appspot.com",
  messagingSenderId: "1083441668914",
  appId: "1:1083441668914:web:8468217c44a48f9505ed2b",
  measurementId: "G-WFRB8XGZRW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
