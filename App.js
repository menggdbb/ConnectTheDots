import React, {Component} from "react";
import MainNavigator from "./navigation/MainNavigator";
import ApiKeys from './constants/ApiKeys';
import firebase from 'firebase';
import 'firebase/firestore';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './store/reducers/RootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';


// Initialize Firebase
firebase.initializeApp(ApiKeys.FirebaseConfig);

const store = createStore(RootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase)
    )
);

const App = () => <MainNavigator/>

export default App;
