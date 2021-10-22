import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDfasc11ZtXf_EZsK2MgzXUYU0pWmYYovw",
    authDomain: "twitter-clone-dd5f0.firebaseapp.com",
    projectId: "twitter-clone-dd5f0",
    storageBucket: "twitter-clone-dd5f0.appspot.com",
    messagingSenderId: "235195292212",
    appId: "1:235195292212:web:a04e9e46dd6abd396dc861"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;