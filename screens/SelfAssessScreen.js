import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Circle } from "../components/engine/circle";
import { TouchCircle } from "../components/engine/systems"
import { Line } from '../components/engine/line';

export default class SelfAssessScreen extends PureComponent {
  static navigationOptions = {
    title: 'SelfAssess'
  };

  constructor() {
    super();
  }
  
  render(){
    return (
      <GameEngine
        style={styles.container}
        systems={[TouchCircle]} //-- We can add as many systems as needed
        entities={{
          0: { position: [60,  0], backgroundColor: "blue", renderer: <Circle />}, //-- Notice that each entity has a unique id (required)
          1: { position: [180, 60], backgroundColor: "blue", renderer: <Circle />}, //-- and a map of components. Each entity has an optional
          2: { position: [300, 200], backgroundColor: "blue", renderer: <Circle />}, //-- renderer component. If no renderer is supplied with the
          3: { position: [60, 800], backgroundColor: "blue", renderer: <Circle />}, //-- entity - it won't get displayed.
          4: { position: [400, 600], backgroundColor: "blue", renderer: <Circle />},
          5: { position: [0, 300], text: "hello", renderer: <Line />},
        }}>

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
