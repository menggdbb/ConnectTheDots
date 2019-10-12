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

export default class TutorialScreenB extends React.Component {
  static navigationOptions = {
    title: 'Tutorial part B'
  };
  
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>
            Here's the tutorial
          </Text>
        </View>
        <TouchableOpacity style={styles.button}
              onPress={() => navigate('SelfAssessB')}>
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
  button: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    
  },
  buttonText: {
    textAlign: 'center',
  }
});
