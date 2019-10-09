import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import firebase from 'firebase'; //firebase
import {
  Alert,
  Image,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Staff'
  };
  state = { nric: '' , show: false}
  
  toggleStatus(){
    this.setShow({
      show: !this.state.show
    });
    console.log('toggle button handler: '+ this.state.show);
  }

  render(){  
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          
        <TouchableOpacity style={styles.optionsBlue}
            onPress={() => toggleStatus()}>
          <Text style={styles.optionText}>
              Search previous record
          </Text>
        </TouchableOpacity>

        {renderIf(this.state.status)(
          <View style={styles.input}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              NRIC
            </Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              onChangeText={nric => this.setState({ nric })}
              value={this.state.nric}
            />
            <View style={styles.buttonView}>
              <Button style={{fontWeight: 'bold', fontSize: 20, marginBottom: 35}}
                  title="Login"
                  onPress={() => navigate('Records')}/>
            </View>
          </View>
        )}

        <TouchableOpacity style={styles.optionsBlue}
            onPress={() => navigate('ClinicalAssess')}>
          <Text style={styles.optionText}>
              Clinical Assessment
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
  optionsBlue: {
    backgroundColor: '#4fc3f7',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10
  },
  textInput: {
    fontSize: 20,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    paddingHorizontal: '2%',
    paddingVertical: '1%',
    marginBottom: 10
    
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
  }

});
