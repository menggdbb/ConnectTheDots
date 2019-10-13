import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TouchCircle } from "../components/engine/systems"
import Entities from '../components/engine/entities'

export default class SelfAssessScreenB extends PureComponent {
  static navigationOptions = {
    title: 'Part B Assessment'
  };

  constructor() {
    super();
    this.state = {
      timing: 0, //timing for part A
      errors: 0, //number of errors for part A
    }
  }

  // to receive events from game engine
  onEvent = (e) => {
    const {navigate} = this.props.navigation
    if (e.type === "finished") {
      this.setState({
        timing: e.timing,
        errors: e.errors
      })
      navigate('SelfAssessResultB', {time: this.state.timing, error: this.state.errors})
    }
  }
  
  render(){
    return (
      <GameEngine
        style={styles.container}
        systems={[TouchCircle]} 
        entities={Entities("B")}
        onEvent={this.onEvent}>}> 
          <StatusBar hidden={false} />
      </GameEngine>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});
