// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeqgAx2DShJy67vtmUUPf0FsT3FPvoHN0",
    authDomain: "avatars-69f2a.firebaseapp.com",
    projectId: "avatars-69f2a",
    storageBucket: "avatars-69f2a.appspot.com",
    messagingSenderId: "196895409855",
    appId: "1:196895409855:web:6e1ffa4f4998b1a677280a",
    measurementId: "G-JH3WNS5NVD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;

  