import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, StatusBar } from "react-native";
import { GameEngine } from "react-native-game-engine";
import { TouchCircle } from "../components/engine/systems"
import Entities from '../components/engine/entities'
import 'firebase/firestore';

export default class ClinicalAssessScreenA extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Part A Assessment'
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
    var nric = this.props.navigation.getParam('nric', 'S1234567A');
    if (e.type === "finished") {
      this.setState({
        timing: e.timing,
        errors: e.errors
      })
      navigate('ClinicalAssessResultA', {nric: nric, time: this.state.timing, error: this.state.errors})
    }
  }

  render(){
    
    // const { navigate } = this.props.navigation;
    return (
      // <View style={styles.container}>
      //   <View style={styles.title}>
      //     <Text style={{fontWeight: 'bold', fontSize: 20}}>
      //       Do your assessment here
      //     </Text>
      //     <Button style={{fontWeight: 'bold', fontSize: 20, marginBottom: 35}}
      //           title="Check result"
      //           onPress={() => navigate('ClinicalAssessResultA', {nric: this.state.nric})}/>
      //   </View>   
      // </View>
      <GameEngine
        style={styles.container}
        systems={[TouchCircle]} 
        entities={Entities("A")}
        onEvent={this.onEvent}>
          <StatusBar hidden={false} />
      </GameEngine>
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
});
