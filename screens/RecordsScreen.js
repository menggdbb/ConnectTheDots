// import * as WebBrowser from 'expo-web-browser';
// import React from 'react';
// import firebase from 'firebase'; //firebase
// import  database  from '../App';
// import  db  from '../App';
// import ItemComponent from '../components/ItemComponent';


// //import renderRecords from '../components/renderRecords';
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

// console.log('Hi from React Native');

// let itemsRef = db.ref('/items');


// export default class RecordsScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home'
//   };
//   state = {items: []};

//   componentDidMount() {
//     itemsRef.on('value', snapshot => {
//       let data = snapshot.val();
//       let items = Object.values(data);
//       this.setState({ items });
//     });
//   }

//   render(){
//     const nric = this.props.navigation.getParam('nric', 'S1234567A');
//     const { navigate } = this.props.navigation;
//     return (
      
//       <View style={styles.container}>
      
        
        
                 
        
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