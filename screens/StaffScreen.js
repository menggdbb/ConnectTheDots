import * as WebBrowser from 'expo-web-browser';
import React from 'react';
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
import renderIf from '../components/renderIf';

export default class StaffScreen extends React.Component {
  static navigationOptions = {
    title: 'Staff'
  };
  state = { nric: '', nric2: '' , show: false, show2: false}
  

  render(){  
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.part}> 
          <TouchableOpacity style={styles.optionsBlue}
              onPress={() => this.setState({
                show: !this.state.show
              })}>
            <Text style={styles.optionText}>
                Search previous record
            </Text>
          </TouchableOpacity>
        </View>

        {renderIf(this.state.show)(
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

            
            <TouchableOpacity style={styles.options}
                onPress={() => navigate('Loading', {nric: this.state.nric})}>
              <Text style={styles.optionTextSmall}>
                  SEARCH
              </Text>
            </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.part}> 
          <TouchableOpacity style={styles.optionsBlue}
              onPress={() => this.setState({
                show2: !this.state.show2
              })}>
            <Text style={styles.optionText}>
                Clinical Assessment
            </Text>
          </TouchableOpacity>
        </View>

        {renderIf(this.state.show2)(
          <View style={styles.input}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              NRIC
            </Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize={'none'}
              onChangeText={nric2 => this.setState({ nric2 })}
              value={this.state.nric2}
            />
            <View style={styles.buttonView}>

            
            <TouchableOpacity style={styles.options}
                onPress={() => navigate('ClinicalAssessA', {nric: this.state.nric2})}>
              <Text style={styles.optionTextSmall}>
                  START
              </Text>
            </TouchableOpacity>
            </View>
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
  part: {
    
  }
  ,
  optionsBlue: {
    marginTop: 80,
    backgroundColor: '#4fc3f7',
    padding: 10,
    paddingLeft: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10
  },
  options: {
    backgroundColor: '#0095dd',
    padding: 10,
    paddingLeft: 10,
    marginRight: 80,
    
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  optionTextSmall: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 4,
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
    justifyContent: 'flex-start',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 60,
    
  },
  buttonView: {
    
    marginRight: 50,
    marginTop: 10
  }

});
