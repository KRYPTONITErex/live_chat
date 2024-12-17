// import firebase from "firebase/app"
// import "firebase/firestore"
// import "firebase/auth"


// const firebaseConfig = {
//     apiKey: "AIzaSyDik3RqB6DCY4UaVxYZM-82M4zth6mgIoo",
//     authDomain: "vue-compo-api.firebaseapp.com",
//     projectId: "vue-compo-api",
//     storageBucket: "vue-compo-api.firebasestorage.app",
//     messagingSenderId: "951088595088",
//     appId: "1:951088595088:web:8b8d284b004478e68c1815"
//   };

// firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();
// let auth = firebase.auth();
// let timestamp = firebase.firebase.FieldValue.serverTimestamp;

// export {db, timestamp, auth}


// // Import the required Firebase services
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, serverTimestamp } from "firebase/firestore";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDik3RqB6DCY4UaVxYZM-82M4zth6mgIoo",
//   authDomain: "vue-compo-api.firebaseapp.com",
//   projectId: "vue-compo-api",
//   storageBucket: "vue-compo-api.appspot.com",
//   messagingSenderId: "951088595088",
//   appId: "1:951088595088:web:8b8d284b004478e68c1815",
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase services
// const db = getFirestore(app);
// const auth = getAuth(app);
// const timestamp = serverTimestamp;

// // Export the services for use in your app
// export { db, auth, timestamp };


// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, serverTimestamp } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDik3RqB6DCY4UaVxYZM-82M4zth6mgIoo",
  authDomain: "vue-compo-api.firebaseapp.com",
  projectId: "vue-compo-api",
  storageBucket: "vue-compo-api.appspot.com",
  messagingSenderId: "951088595088",
  appId: "1:951088595088:web:8b8d284b004478e68c1815",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp;

export { db, auth, timestamp };