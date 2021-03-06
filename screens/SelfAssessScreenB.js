import * as WebBrowser from 'expo-web-browser';
import React, {PureComponent} from 'react';
import { StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TouchCircle } from "../components/engine/systems"
import Entities from '../components/engine/entities'
import { ErrorBoundary } from '../components/ErrorBoundary'

export default class SelfAssessScreenB extends PureComponent {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
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
    const {navigate} = this.props.navigation;
    var timeA =  this.props.navigation.getParam('timeA', 0);
    var errorA = this.props.navigation.getParam('errorA', 0);
    if (e.type === "finished") {
      this.setState({
        timing: e.timing,
        errors: e.errors
      })
      //send result to next screen
      navigate('SelfAssessResultB', {time: this.state.timing, error: this.state.errors, timeA: timeA, errorA: errorA})
    }
  }
  
  render(){
    return (
      <ErrorBoundary>
        <GameEngine
          style={styles.container}
          systems={[TouchCircle]} 
          entities={Entities("B")}
          onEvent={this.onEvent}> 
            <StatusBar hidden={false}/>
        </GameEngine>
      </ErrorBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});
