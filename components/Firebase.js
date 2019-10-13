import firebase from 'firebase'; //firebase
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvSYNhzz71ndyMv1sev-DjCrvDyC8zIxs",
    authDomain: "connect-the-dots-abd9a.firebaseapp.com",
    databaseURL: "https://connect-the-dots-abd9a.firebaseio.com",
    projectId: "connect-the-dots-abd9a",
    storageBucket: "connect-the-dots-abd9a.appspot.com",
    messagingSenderId: "1045616440269",
    appId: "1:1045616440269:web:fc8bd26ea251f936350a84",
    measurementId: "G-SR4CM03XTV"
  };

//f (!firebase.apps.length) {
const Firebase = firebase.initializeApp(firebaseConfig);
//}

//export const db = Firebase.firestore();
export default Firebase;