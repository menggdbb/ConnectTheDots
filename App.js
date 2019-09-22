import React, {Component} from "react";
import MainNavigator from "./navigation/MainNavigator";

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAAIXWSST5snIy2iVtiboZmDMDArUyF8dk",
    authDomain: "trail-to-remember.firebaseapp.com",
    databaseURL: "https://trail-to-remember.firebaseio.com",
    projectId: "trail-to-remember",
    storageBucket: "trail-to-remember.appspot.com",
    messagingSenderId: "381778973506",
    appId: "1:381778973506:web:d81583326228740045aedb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const App = () => <MainNavigator/>

export default App;