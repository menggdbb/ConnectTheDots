import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import 'firebase/firestore';
import ItemComponent from '../components/ItemComponent';
import Firebase from '../components/Firebase';

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

// firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();

//import renderRecords from '../components/renderRecords';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Previous Records'
  };
  state = {items: []};

  componentDidMount(){
    const { navigate } = this.props.navigation;
    var records = [];
    const nric = this.props.navigation.getParam('nric', 'S1234567A');
    if (records) {
        navigate('Records', {records: records})
    }
    // Getting Data
    db.collection('scores').where('NRIC', '==', nric).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        var NRIC = doc.data().NRIC;
        var accuracy = doc.data().accuracy;
        var completionTime = doc.data().completionTime;
        var date = doc.data().date; //var date = doc.data().date.toDate()
        var noOfErrors = doc.data().noOfErrors;
        var test = doc.data().test; // A = 123...25, B=1A2B...13
        // console.log(NRIC);
        // console.log(accuracy);
        // console.log(completionTime);
        // console.log(date);
        // console.log(noOfErrors);
        var temp = [NRIC, accuracy, completionTime, date, noOfErrors, test];
        
        records.push(temp);
        //console.log(records);
      }) 
    })
    console.log(records);
    if (records) {
        navigate('Records', {records: records})
    }
  }

  
    
  render() {
      return(
          <Text>LOADING</Text>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  
});