import React, {Component} from "react";
import MainNavigator from "./navigation/MainNavigator";
import firebase from 'firebase';
import 'firebase/firestore';

console.ignoredYellowBox = ['Setting a timer'];

const App = () => <MainNavigator/>

export default App;