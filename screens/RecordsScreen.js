import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import 'firebase/firestore';
//import  database  from '../App';
//import  db  from '../App';
import ItemComponent from '../components/ItemComponent';

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

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Getting Data
db.collection('scores').get().then((snapshot) => { //db.collection('scores').where('NRIC', '==', 'nric').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      //console.log(doc.data())
      var NRIC = doc.data().NRIC;
      var accuracy = doc.data().accuracy;
      var completionTime = doc.data().completionTime;
      var date = doc.data().date;
      var noOfErrors = doc.data().noOfErrors;
      console.log(doc.data().NRIC);
      console.log(doc.data().accuracy);
      console.log(doc.data().completionTime);
      console.log(doc.data().date.toDate());
      console.log(doc.data().noOfErrors);
    }) 
  })

//import renderRecords from '../components/renderRecords';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

export default class RecordsScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  state = {items: []};

  render(){
    const nric = this.props.navigation.getParam('nric', 'S1234567A');
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      
        
        
                 
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundContainer: {
    position: "absolute",
    bottom: 0,
    

  },
  title: {
    flex: 4,
    alignItems: 'center',
    marginTop: 10,
  },

  titleImage: {
    height: 250,
    resizeMode: 'contain',
  },

  homeImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -10,
  },

  menu: {
    flex: 3,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 40,
    marginRight: 60,
    
  },
  optionsGrey: {
    backgroundColor: '#DDDDDD',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10
  },
  optionsBlue: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  huehehehehe: {
    padding: 40
  },
  
});