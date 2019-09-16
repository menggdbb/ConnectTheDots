import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  
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

        <View style={styles.bottomContainer}>
          <View style={styles.homeContainer}>
            <Image
              source={ require('../assets/images/test.png')}
              style={styles.homeImage}
            />
          </View>    

          <View style={styles.menu}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 35}}
                    onPress={() => navigate('Tutorial')}>
                Self Assessment
            </Text>
            
            <Text style={{fontWeight: 'bold', fontSize: 20, color: 'grey', marginBottom: 40}}
                  onPress={() => navigate('Login')}>
              Clinical Assessment
            </Text>
          </View>  
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
