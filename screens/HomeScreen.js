import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import 'firebase/firestore';
import {
  Button,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Linking
} from 'react-native';
import renderIf from '../components/renderIf';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Home'
  };
  state = {imgOpacity: 0, textColor: "#ffffff", count: 0}

  
  render(){
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      
        <View style={styles.title}>
          <Image 
            source={ require('../assets/images/title.png')}
            style={styles.titleImage}
          />
        </View>

        <View style={styles.menu}>

          <TouchableOpacity style={styles.optionsBlue}
              onPress={() => navigate('Tutorial')}> 
            <Text style={styles.optionText}>
              <Image
                style={{width: 20, height: 20, margin: 10}}
                resizeMode = 'contain'
                source={require('../assets/images/assess.png')}
              />
                Self Assessment 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionsGrey}
              onPress={() => navigate('Login')}>
            
            <Text style={styles.optionText}>
              <Image
                style={{width: 20, height: 20, margin: 10}}
                resizeMode = 'contain'
                source={require('../assets/images/assess_clinic.png')}
              />
                Clinical Assessment
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
  backgroundContainer: {
    
    position: "absolute",
    bottom: 0
    

  },
  title: {
    flex: 4,
    alignItems: 'center',
    marginTop: 10,
  },

  titleImage: {
    height: 250,
    resizeMode: 'contain',
  },

  homeImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -10,
  },

  menu: {
    flex: 3,
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 40,
    marginRight: 50,
    
  },
  optionsGrey: {
    backgroundColor: '#DDDDDD',
    marginBottom: 20,
    padding: 5,
    borderRadius: 40,
  },
  optionsBlue: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 5,
    borderRadius: 40,
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 5,
    marginLeft: 15
  },
  
});
