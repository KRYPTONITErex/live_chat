

import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDik3RqB6DCY4UaVxYZM-82M4zth6mgIoo",
    authDomain: "vue-compo-api.firebaseapp.com",
    projectId: "vue-compo-api",
    storageBucket: "vue-compo-api.firebasestorage.app",
    messagingSenderId: "951088595088",
    appId: "1:951088595088:web:8b8d284b004478e68c1815"
  };

// firebase.initializeApp(firebaseConfig);
// let db = firebase.firestore();
// let auth = firebase.auth();
// let timestamp = firebase.firebase.FieldValue.serverTimestamp;

// export {db, timestamp, auth}

// Initialize Firebase ONLY ONCE
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export {db, timestamp, auth};