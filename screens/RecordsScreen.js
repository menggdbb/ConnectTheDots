import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import 'firebase/firestore';
import ItemComponent from '../components/ItemComponent';
import Firebase from '../components/Firebase';
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


export default class RecordsScreen extends React.Component {
  static navigationOptions = {
    title: 'Previous Records'
  };
  state = {items: []};

  render(){
    const { navigate } = this.props.navigation;
    const nric = this.props.navigation.getParam('nric', 'S1234567A');
    var records = [];
    var recordMap = [];

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
        records.push(doc.data());
        
        console.log(records);
      }) 
    })
    


    return (

      <View style={styles.container}>
      
        {records.map((item, key)=> (
          <Text key={key}> { item.NRIC }, { item.accuracy } </Text>)
        )}
        
                 
        
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