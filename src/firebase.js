// import firebase from 'firebase';
// let config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// };

// firebase.initializeApp(config);

// export default firebase.database();

import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUcBBtc-ui2hyuUeX01Gw87ZphLeq4w0U",
  authDomain: "whatsapp-7bf86.firebaseapp.com",
  projectId: "whatsapp-7bf86",
  storageBucket: "whatsapp-7bf86.appspot.com",
  messagingSenderId: "206052207487",
  appId: "1:206052207487:web:0ccf12157592114b34c84a",
  measurementId: "G-L0V5NKKQY8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
