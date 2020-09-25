// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDCQqkdPQXoNQWqtE6Lil_eQ9T4JJ1mHhI",
    authDomain: "instagram-96879.firebaseapp.com",
    databaseURL: "https://instagram-96879.firebaseio.com",
    projectId: "instagram-96879",
    storageBucket: "instagram-96879.appspot.com",
    messagingSenderId: "256430951854",
    appId: "1:256430951854:web:c0fe40c576a8939b308c3f",
    measurementId: "G-32Z59PLB3F"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };