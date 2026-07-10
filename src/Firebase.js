
import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import {getAuth,} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDjcrjc9ncTq96Adsc3AMSBi4XK0aM1isQ",
    authDomain: "linkedin-clone-d970f.firebaseapp.com",
    projectId: "linkedin-clone-d970f",
    storageBucket: "linkedin-clone-d970f.appspot.com",
    messagingSenderId: "640027253866",
    appId: "1:640027253866:web:37105769bd56595a23be13"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  const auth=getAuth(app);

  export {db,auth};