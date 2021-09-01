import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB-N6BcKfutsp881cgWvJR2_HfF-CupDM",
  authDomain: "whattsup-2.firebaseapp.com",
  projectId: "whattsup-2",
  storageBucket: "whattsup-2.appspot.com",
  messagingSenderId: "409260638554",
  appId: "1:409260638554:web:ae62191096be5ba9287363",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
