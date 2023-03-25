import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAXlaRRuf5TZKuqLsrdTTRrRscFvpfSJmU",
    authDomain: "linkedin-clone-444d4.firebaseapp.com",
    projectId: "linkedin-clone-444d4",
    storageBucket: "linkedin-clone-444d4.appspot.com",
    messagingSenderId: "212613235934",
    appId: "1:212613235934:web:f55c96b11542efac7a2e4f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }