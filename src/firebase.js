import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBr6TmUxKkRcpXAb9euN3CqSDbRJ3pCsyw",
    authDomain: "project-ott-d883c.firebaseapp.com",
    databaseURL: "https://project-ott-d883c.firebaseio.com",
    projectId: "project-ott-d883c",
    storageBucket: "project-ott-d883c.appspot.com",
    messagingSenderId: "142295620948",
    appId: "1:142295620948:web:a3ba76dd882e49a72a7cc1",
    measurementId: "G-QRV3JXQHJJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const rdb = firebase.database();
  export const storage = firebase.storage();

  export default firebase;

  