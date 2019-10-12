import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class ClinicalAssessResultScreen extends React.Component {
  static navigationOptions = {
    title: 'ClinicalAssessResult'
  };
  state = {
    text: ''
  }

  render(){
    
    const timeTaken = "46"; //need this
    const timeSec = timeTaken%60;
    const timeMin = ((timeTaken+timeSec) /60) - 1;
    const numErr = "4"; //and this
    const accuracy = 100 - (numErr/(numErr+25))*100;

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.timeView}>
          <Text style={styles.timeText}>
              {timeMin}:{timeSec} min
          </Text>
          <View style={styles.labelText}>
            <Image 
              source={ require('../assets/images/time.png')}
              style={styles.icon}
            />
            <Text style={styles.timeText}>
                Time Taken
            </Text>
          </View>
        </View>

        <View style={styles.accuracyView}>
          <Text style={styles.accuracyText}>
              {accuracy}%
          </Text>
        </View>

        <View style={styles.errorView}>
          <Text style={styles.errorText}>
              {numErr}
          </Text>
        </View>
        
        
               
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  titleImage: {
    height: 270,
    resizeMode: 'contain',
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  homeImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -10,
  },
  bottomContainer: {
    flexDirection: "row",
  },
  menu: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  textInput: {
    fontSize: 20,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    marginBottom: 10
  },
  input: {
    flex: 6,
    justifyContent: 'flex-start',
    marginLeft: 30,
    marginRight: 60
  },
  buttonView: {
    
    marginRight: 50,
    marginTop: 10
  }

});
