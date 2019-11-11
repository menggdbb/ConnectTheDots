import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { GameEngine } from "react-native-game-engine";
import { TutorialTouchCircle } from "../components/engine/systems"
import Entities from '../components/engine/entities'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';

export default class TutorialScreenB extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Tutorial part B'
  };

  constructor() {
    super();
    this.state = {
      text: "Try to connect in order!"
    }
  }

  // to receive events from game engine
  onEvent = (e) => {
    if (e.type === "correct") {
      this.setState({
        text: e.text
      })
    } else if (e.type === "wrong") {
      this.setState({
        text: e.text
      })
    } else if (e.type === "last") {
      this.setState({
        text: e.text
      })
    }
  }
  render(){
    const { navigate } = this.props.navigation;
    var timeA =  this.props.navigation.getParam('timeA', 0);
    var errorA = this.props.navigation.getParam('errorA', 0);
    return (
      <View style={styles.container}>
        <GameEngine
            style={styles.container}
            systems={[TutorialTouchCircle]} 
            entities={Entities("TB")}
            onEvent={this.onEvent}>
            <StatusBar hidden={false} />
        </GameEngine>
        <Text style={styles.tutorialText}>
          {this.state.text}
        </Text>
        <TouchableOpacity style={styles.button}
              onPress={() => navigate('SelfAssessB', {timeA: timeA, errorA: errorA})}>
            <Text style={styles.buttonText}>
                Proceed
            </Text>
        </TouchableOpacity>
                
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,    
  },
  buttonText: {
    textAlign: 'center',
  },
  tutorialText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20
  },
});
