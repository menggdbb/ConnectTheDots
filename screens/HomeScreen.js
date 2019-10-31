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

        
        {renderIf(this.state.count > 5)(
        <View style= {{flex: 1, flexDirection: "row"}}>
          <TouchableOpacity style={styles.huehehehehe}
            onPress={() => this.setState({
              count: 0})}>
            <View style = {styles.backgroundContainer}>
              <Image
                style={{width: Dimensions.get('window').width*3/4, height: 160}}
                resizeMode = 'contain'
                source={require('../assets/images/hehe.png')}
              />
            
            </View>
          </TouchableOpacity>  
          <TouchableOpacity style={styles.huehehehehe}
          onPress={() => Linking.openURL('http://155.69.100.27/3002s11920_SAMWYD/index.php/Main_Page')}>
            <View style = {styles.backgroundContainer, {alignSelf: "flex-end"}}>
              <Image
                style={{width: Dimensions.get('window').width/4, height: 80}}
                resizeMode = 'contain'
                source={require('../assets/images/special.png')}
              />
            </View>
          </TouchableOpacity> 
        </View>
        )}
        {renderIf(this.state.count < 6)(
        <View style={{flex: 1, position: 'absolute', bottom: 0, right: 0}}>
          <Image
            style={{width: Dimensions.get('window').width/2, height: 160, alignSelf: "flex-end"}}
            resizeMode = 'contain'
            source={require('../assets/images/HPB.jpg')}
          />
        </View>
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
  huehehehehe: {
    flex: 1,
  },
  
});
