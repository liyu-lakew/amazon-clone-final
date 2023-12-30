
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2YAl65XpYeb1dkjHW_6JPhwOcZ1pWo9I",
    authDomain: "clone-lee.firebaseapp.com",
    projectId: "clone-lee",
    storageBucket: "clone-lee.appspot.com",
    messagingSenderId: "130596927555",
    appId: "1:130596927555:web:b288f4dbcb54be659f3cf6",
    // measurementId: "G-8LJ3KDDDE5"
  };
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore()

export { auth, db };

