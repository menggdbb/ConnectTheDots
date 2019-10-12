import React, {Component} from "react";
import MainNavigator from "./navigation/MainNavigator";
import firebase from 'firebase';
import 'firebase/firestore';

// const firebaseConfig = {
//     apiKey: "AIzaSyBvSYNhzz71ndyMv1sev-DjCrvDyC8zIxs",
//     authDomain: "connect-the-dots-abd9a.firebaseapp.com",
//     databaseURL: "https://connect-the-dots-abd9a.firebaseio.com",
//     projectId: "connect-the-dots-abd9a",
//     storageBucket: "connect-the-dots-abd9a.appspot.com",
//     messagingSenderId: "1045616440269",
//     appId: "1:1045616440269:web:fc8bd26ea251f936350a84",
//     measurementId: "G-SR4CM03XTV"
//   };

//firebase.initializeApp(firebaseConfig);
//var db = firebase.firestore();

//console.log("Welcome to the Thunderdome.");

// // Getting Data
// db.collection('scores').get().then((snapshot) => {
//   snapshot.docs.forEach(doc => {
//     //console.log(doc.data())
//     var NRIC = doc.data().NRIC;
//     var accuracy = doc.data().accuracy;
//     var completionTime = doc.data().completionTime;
//     var date = doc.data().date;
//     var noOfErrors = doc.data().noOfErrors;
//     console.log(doc.data().NRIC);
//     console.log(doc.data().accuracy);
//     console.log(doc.data().completionTime);
//     console.log(doc.data().date.toDate());
//     console.log(doc.data().noOfErrors);
//   }) 
// })

const App = () => <MainNavigator/>

export default App;