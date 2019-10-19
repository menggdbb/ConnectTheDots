import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import renderIf from '../components/renderIf';

export default class SelfAssessFinalResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Summary'
  };
  
  render(){
    var timeTakenA = this.props.navigation.getParam('timeA', 40); //need this
    var timeSecA = timeTakenA%60;
    var timeMinA = ((timeTakenA+(60-timeSecA))/60) - 1;
    var numErrA = this.props.navigation.getParam('errorA', 0); //and this
    var accuracyA = 100 - ((numErrA/(numErrA+25))*100);

    var timeTakenB = this.props.navigation.getParam('timeB', 40);
    var timeSecB = timeTakenB%60;
    var timeMinB = ((timeTakenB+(60-timeSecB))/60) - 1;
    var numErrB = this.props.navigation.getParam('errorB', 0); 
    var accuracyB = 100 - ((numErrB/(numErrB+25))*100);
    

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.timeView}>

          <View style={styles.side}>
            <Text style={styles.timeText}>
                {timeMinA.toFixed(0)}:{timeSecA.toFixed(0)} min
            </Text>
            <Text style={styles.timeText}>
                {timeMinB.toFixed(0)}:{timeSecB.toFixed(0)} min
            </Text>
          </View>

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
              {accuracyA.toFixed(2)}%
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
              {numErrA}
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

        {renderIf(timeTaken > 78)(
          <View style={styles.input}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              WARNING, check with your doctor 
            </Text>
          </View>
        )}
        {renderIf(timeTaken <= 78)(
          <View style={styles.input}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              You are under the normal range 
            </Text>
          </View>
        )}

        <View style={{justifyContent: 'flex-end', flex: 1, marginTop: 40}}>
          <TouchableOpacity style={styles.continue}
                onPress={() => navigate('Home')}>
            <Text style={styles.continueText}>
                Home
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
  side: {
    flexDirection:'row'
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