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

export default class ClinicalAssessResultScreenA extends React.Component {
  static navigationOptions = {
    title: 'Part A result'
  };
  state = {
    text: ''
  }

  render(){
    
    var timeTaken = 46; //need this
    var timeSec = timeTaken%60;
    var timeMin = ((timeTaken+(60-timeSec))/60) - 1;
    var numErr = 4; //and this
    var accuracy = 100 - ((numErr/(numErr+25))*100);


    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.timeView}>
          <Text style={styles.timeText}>
              {timeMin.toFixed(0)}:{timeSec} min
          </Text>
          <View style={styles.label}>
            <Image 
              source={ require('../assets/images/time.png')}
              style={styles.icon}
            />
            <Text style={styles.labelText}>
                Time Taken
            </Text>
          </View>
        </View>

        <View style={styles.accuracyView}>
          <Text style={styles.accuracyText}>
              {accuracy.toFixed(2)}%
          </Text>
          <View style={styles.label}>
            <Image 
              source={ require('../assets/images/accuracy.png')}
              style={styles.icon}
            />
            <Text style={styles.labelText}>
                Accuracy
            </Text>
          </View>
        </View>

        <View style={styles.errorView}>
          <Text style={styles.errorText}>
              {numErr}
          </Text>
          <View style={styles.label}>
            <Image 
              source={ require('../assets/images/mistake.png')}
              style={styles.icon}
            />
            <Text style={styles.labelText}>
                Mistakes
            </Text>
          </View>
        </View>    

        <View style={{justifyContent: 'flex-end', flex: 1, marginTop: 40}}>
          <TouchableOpacity style={styles.continue}
                onPress={() => navigate('ClinicalAssessB')}>
            <Text style={styles.continueText}>
                Continue
            </Text>
          </TouchableOpacity>
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
  label: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  labelText: {
    flex: 1,
    fontSize: 16,
    alignSelf: 'flex-start'
  },
  icon: {
    flex: 1,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 40
  },
  timeView: {
    flex: 4,
    marginTop: 20,
    justifyContent: 'center',
  },
  accuracyView: {
    flex: 4,
    marginTop: 20,
    justifyContent: 'center'    
  },
  errorView: {
    flex: 4,
    marginTop: 20,
    justifyContent: 'center',
  },
  timeText: {
    backgroundColor: '#32CD32',
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    padding: 20,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 4,
  },
  accuracyText: {
    backgroundColor: '#0080FF',
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    padding: 20,
    paddingTop: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 4,
  },
  errorText: {
    backgroundColor: '#6D0101',
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    padding: 40,
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 4,
  },
  continue: {
    
    backgroundColor: '#4fc3f7',
    padding: 10,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10,
    marginRight: 20,
    marginBottom: 20,
    
    alignSelf: "flex-end",
    
  },
  continueText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
