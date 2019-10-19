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

const db = Firebase.firestore();

export default class RecordsScreen extends React.Component {
  static navigationOptions = {
    title: 'Previous Records'
  };

  constructor() {
    super();
    this.state = {
			records: [],
			dbStarted: false,
			dbCalled: false,
			componentMount: false,
      recordsText: '',
    }
  }
  
  callFromDB = () => {
    const nric = this.props.navigation.getParam('nric', 'S1234567A');

    // Getting Data
    db.collection('scores').where('NRIC', '==', nric).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        var NRIC = doc.data().NRIC;
        var accuracy = doc.data().accuracy;
        var completionTime = doc.data().completionTime;
        var date = doc.data().date; //var date = doc.data().date.toDate()
        var noOfErrors = doc.data().noOfErrors;
        var test = doc.data().test; // A = 123...25, B=1A2B...13
        var temp = [NRIC, accuracy, completionTime, date, noOfErrors, test];
				// var temp = {
				// 	nric: NRIC,
				// 	accuracy: accuracy,
				// 	completionTime, completionTime, 
				// 	date: date,
				// 	noOfErrors: noOfErrors,
				// 	test: test
        // }
        
        const string = this.state.recordsText +
        "NRIC: " + temp[0] + 
        "\nAccuracy: " + temp[1] +
        "\nCompletion Time: " + temp[2] + 
        "\nDate: " + temp[3] +
        "\nNo Of Errors: " + temp[4] + 
        "\nTest: " + temp[5] + "\n\n"
        
        this.setState({
          recordsText: string
        })

				this.state.records.push(temp)
        console.log("records pushed")
				this.state.dbStarted = true;
      }) 
    })
	}
	
	// renderText() {
	// 	return this.state.records[0].map((item, key)=>(
	// 		<Text key={key} style={styles.textStyle}> {item.text}</Text>
	// 	))
	// }

  reset = () => {
    this.state.records = []
    this.state.dbStarted = false;
		this.state.dbCalled = false;
  }

  componentDidMount() {
    this.state.componentMount = true
    this.reset();
    console.log("reset")
    this.render();
  }

  render(){
    const { navigate } = this.props.navigation;
    
    console.log('render start');
    if (this.state.componentMount) {
      if (!this.state.dbCalled) {
        console.log("db called")
        this.callFromDB();
        this.state.dbCalled = true;
      } 
      if (this.state.dbStarted) {
        console.log("log records")
				// console.log(this.state.records);
      }
		}
		

    return (

      <View style={styles.container}>
				{/* <Text>{this.state.records[0]}</Text> */}
				{/* <Text>Testing</Text> */}
				{<Text>{this.state.recordsText}</Text>}
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
	textStyle: {
		fontSize: 25,
		textAlign: 'center'
	}
  
});