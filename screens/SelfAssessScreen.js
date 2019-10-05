import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { AppRegistry, StyleSheet, StatusBar, Dimensions } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { Circle } from "../components/engine/circle";
import { TouchCircle } from "../components/engine/systems"
import { Line } from '../components/engine/line';
import { TestText} from '../components/engine/test-text'

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

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
          0: { position: [60,  HEIGHT - 140], backgroundColor: "yellow", renderer: <Circle />},
          1: { position: [180, HEIGHT - 120], backgroundColor: "blue", renderer: <Circle />},
          2: { position: [180, 0, 400, HEIGHT - 60], renderer: <Line />},
          3: { text: 'width: ' + WIDTH + ', height: ' + HEIGHT, width: WIDTH, top: HEIGHT / 2, renderer: <TestText />},
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
