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
  Dimensions
} from 'react-native';
import renderIf from '../components/renderIf';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  state = {imgOpacity: 0, textColor: "#ffffff", count: 0}

  
  render(){
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.title}
          onPress={() => this.setState({
            count: this.state.count+1,
            // imgOpacity: 0,
            // textColor: "#ffffff" 
            })}>
          <Image 
            source={ require('../assets/images/title.png')}
            style={styles.titleImage}
          />
        </TouchableOpacity>

        <View style={styles.menu}>

          <TouchableOpacity style={styles.optionsBlue}
              onPress={() => navigate('Tutorial')}> 
            <Text style={styles.optionText}>
                Self Assessment 
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionsGrey}
              onPress={() => navigate('Login')}>
            <Text style={styles.optionText}>
                Clinical Assessment
            </Text>
          </TouchableOpacity>

        </View>

        
        {renderIf(this.state.count > 5)(
        <TouchableOpacity style={styles.huehehehehe}
          onPress={() => this.setState({
            count: 0})}>
          <View style = {styles.backgroundContainer}>
            <Image
              style={{width: Dimensions.get('window').width, height: 190}}
              resizeMode = 'contain'
              source={require('../assets/images/hehe.png')}
            />
          </View>
        </TouchableOpacity>  
        )}
        
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
    bottom: 0,
    

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
    marginRight: 60,
    
  },
  optionsGrey: {
    backgroundColor: '#DDDDDD',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10
  },
  optionsBlue: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  huehehehehe: {
    padding: 40
  },
  
});
