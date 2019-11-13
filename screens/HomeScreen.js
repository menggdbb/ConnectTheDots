import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import 'firebase/firestore';
import { ErrorBoundary } from '../components/ErrorBoundary'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Home'
  };

  render(){
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
        <ErrorBoundary>
          <View style={styles.title}>
            <Image 
              source={ require('../assets/images/title.png')}
              style={styles.titleImage}
            />
          </View>
        </ErrorBoundary>
        
        <View style={styles.menu}>
          <ErrorBoundary>
            <TouchableOpacity style={styles.optionsBlue}
                onPress={() => navigate('Tutorial')}> 
              <Text style={styles.optionText}>
                <Image
                  style={styles.icon}
                  resizeMode = 'contain'
                  source={require('../assets/images/assess.png')}
                />
                  Self Assessment 
              </Text>
            </TouchableOpacity>
          </ErrorBoundary>
          <ErrorBoundary>
            <TouchableOpacity style={styles.optionsGrey}
                onPress={() => navigate('Login')}>
              <Text style={styles.optionText}>
                <Image
                  style={styles.icon}
                  resizeMode = 'contain'
                  source={require('../assets/images/assess_clinic.png')}
                />
                  Clinical Assessment
              </Text>
            </TouchableOpacity>
          </ErrorBoundary>
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
  title: {
    flex: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  titleImage: {
    height: 250,
    resizeMode: 'contain',
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
  icon: {
    width: 20, 
    height: 20, 
    margin: 10
  }
});
