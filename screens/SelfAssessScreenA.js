import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TouchCircle } from "../components/engine/systems"
import Entities from '../components/engine/entities'
import {dac} from '../components/engine/creation-logic2'

export default class SelfAssessScreenA extends PureComponent {
  static navigationOptions = {
    title: 'Part A Assessment'
  };

  constructor() {
    super();
  }
  
  render(){
    return (
      <GameEngine
        style={styles.container}
        systems={[TouchCircle]} 
        entities={Entities()}> 
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

AppRegistry.registerComponent("SelfAssessScreen", () => SelfAssessScreen);
