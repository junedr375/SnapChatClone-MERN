import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_H4D4Jm0C8SnJmddw7hHpNJsFbbV2agU",
  authDomain: "snapchat-clone-dbb31.firebaseapp.com",
  projectId: "snapchat-clone-dbb31",
  storageBucket: "snapchat-clone-dbb31.appspot.com",
  messagingSenderId: "627743477090",
  appId: "1:627743477090:web:ec701d75e74414e1dd703b",
  measurementId: "G-B8KV00LSP3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
