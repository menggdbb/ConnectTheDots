import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import { ErrorBoundary } from '../components/ErrorBoundary'
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Login'
  };
  state = { email: '', password: '', errorMessage: "", text: '' }
  
  render(){
    
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground source={ require('../assets/images/background-2.jpg')} style={{width: '100%', height: '100%'}}>       
      
        <ErrorBoundary>
          <View style={styles.container}>

              <View style={styles.title}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                    Staff Authentication
                </Text>
              </View>

              <View style={styles.input}>

                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  User name
                </Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize={'none'}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />

                <Text style={{fontWeight: 'bold', fontSize: 20}}>
                  Password
                </Text>
                <TextInput
                  style={styles.textInput}
                  autoCapitalize={'none'}
                  secureTextEntry={true}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />

                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.options}
                      onPress={() => firebase
                        .auth()
                        .signInWithEmailAndPassword(this.state.email, this.state.password)
                        .then(() => navigate('Staff'))
                        .catch(error => Alert.alert(
                          'Authentication Error!',
                          'You have entered the wrong username or password'
                        ) )}>
                    <Text style={styles.optionText}>
                        LOGIN
                    </Text>
                  </TouchableOpacity>
                </View>

              </View>

          </View>
        </ErrorBoundary>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    margin: 30,
    marginBottom: 160,
    borderRadius: 15,    
  },
  title: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },
  menu: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  textInput: {
    fontSize: 20,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    marginBottom: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)"    
  },
  input: {
    flex: 6,
    justifyContent: 'flex-start',
    marginLeft: 30,
    marginRight: 60
  },
  buttonView: {
    marginRight: 50,
    marginTop: 10
  },
  options: {
    backgroundColor: '#0095dd',
    padding: 10,
    paddingLeft: 10,
  },
  optionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 4,
  },

});
