import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
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

export default class ClinicalAssessResultScreen extends React.Component {
  static navigationOptions = {
    title: 'ClinicalAssessResult'
  };
  state = {
    text: ''
  }

  render(){
    
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={styles.title}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Here's your result, also input the NRIC yo
            </Text>
              
          </View>
          <View style={styles.input}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
            NRIC
            </Text>
            <TextInput
                style={styles.textInput}
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
            />
          </View>

          
          <Button style={{fontWeight: 'bold', fontSize: 20, marginBottom: 35}}
                title="Back to Main Menu"
                onPress={() => navigate('Home')}/>
                
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
  textInput: {
    width: 400,
    fontSize: 20,
    borderColor: 'darkslategrey',
    borderWidth: 1,
    paddingHorizontal: '2%'
  },
  input: {
    flex: 5,
    justifyContent: 'flex-start'
  }

});
