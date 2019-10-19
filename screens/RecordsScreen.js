// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import firebase from 'firebase'; //firebase
// import 'firebase/firestore';
// import ItemComponent from '../components/ItemComponent';
// import Firebase from '../components/Firebase';
// import {
//   Button,
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions
// } from 'react-native';

// const db = Firebase.firestore();

// const nric = this.props.navigation.getParam('nric', 'S1234567A');
// let lastNric = ''

// let records = [];
// let dbStarted = false;
// let dbCalled = false;
// let componentMount = false;

// export default class RecordsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Previous Records'
//   };

//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     restarted: false
//   //   }
//   // }
  
//   callFromDB = (nric) => {
    
//     //if last nric different; reset
//     if (nric != lastnric) {
//       records = []
//       lastNric = nric
//     }

//     // Getting Data
//     db.collection('scores').where('NRIC', '==', nric).get().then((snapshot) => {
//       snapshot.docs.forEach(doc => {
//         var NRIC = doc.data().NRIC;
//         var accuracy = doc.data().accuracy;
//         var completionTime = doc.data().completionTime;
//         var date = doc.data().date; //var date = doc.data().date.toDate()
//         var noOfErrors = doc.data().noOfErrors;
//         var test = doc.data().test; // A = 123...25, B=1A2B...13
//         var temp = [NRIC, accuracy, completionTime, date, noOfErrors, test];
        
//         records.push(temp);
//         console.log("records pushed")
//         dbStarted = true;
//         this.render();
//       }) 
//     })
//     // console.log("finally pushed")
//     // console.log(records)
//   }

//   reset = () => {
//     dbStarted = false;
//     dbCalled = false;
//   }

//   componentDidMount() {
//     componentMount = true
//     this.reset();
//     console.log("reset")
//     this.render();
//   }

//   render(){
//     const { navigate } = this.props.navigation;
    
//     // const records =  this.props.navigation.getParam('records', 0);

//     console.log('render start');
//     if (componentMount) {
//       if (!dbCalled) {
//         this.callFromDB(nric);
//         dbCalled = true;
//       } 
//       if (dbStarted) {
//         console.log(records);
//       }
//     }
  
  
    

//     // const renderData = records.map((records) =>
//     //   records.map((item) =>
//     //     <Text>
//     //       {item}
//     //     </Text>
//     //   )
//     // );
      
//     // {renderData}
//     //console.log('records');

//     //const form = ['First Name', 'Last Name', 'Phone', 'Email', 'Etc']
//     //const textInputComponents = form.map((item)=> <TextInput placeholder={item} />);

//     return (

//       <View style={styles.container}>
//       <Text>{this.CallFromDB}</Text>
//       <Text>Testing</Text>
               
                 
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   backgroundContainer: {
//     position: "absolute",
//     bottom: 0,
    

//   },
//   title: {
//     flex: 4,
//     alignItems: 'center',
//     marginTop: 10,
//   },

//   titleImage: {
//     height: 250,
//     resizeMode: 'contain',
//   },

//   homeImage: {
//     width: 150,
//     height: 200,
//     resizeMode: 'contain',
//     marginBottom: -10,
//   },

//   menu: {
//     flex: 3,
//     alignContent: 'flex-start',
//     justifyContent: 'flex-start',
//     marginLeft: 40,
//     marginRight: 60,
    
//   },
//   optionsGrey: {
//     backgroundColor: '#DDDDDD',
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 10
//   },
//   optionsBlue: {
//     backgroundColor: '#4fc3f7',
//     marginBottom: 20,
//     padding: 10,
//     borderRadius: 10
//   },
//   optionText: {
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   huehehehehe: {
//     padding: 40
//   },
  
// });