import React from 'react';
import 'firebase/firestore';
import Firebase from '../components/Firebase';
import { ListItem } from '../components/ListItem'
import { callFromDatabase } from '../components/RecordsComponent'
import {
  StyleSheet,
  View,
  ListView,
  Text
} from 'react-native';

const db = Firebase.firestore();

export default class RecordsScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#4fc3f7',
    },
    title: 'Previous Records'
  };

  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      errorText: "No records found.",
      errorTextSize: 0,
    }
  }

  componentDidMount() {
    callFromDatabase(this, db)
  }

  _renderItem(item) {
    return (
      <ListItem item={item}></ListItem>
    )
  }

  render(){
    const { navigate } = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text style={[styles.textStyle, {fontSize: this.state.errorTextSize}]}>
          {this.state.errorText}
        </Text>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/> 
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
	textStyle: {
		textAlign: 'center'
  },
  listview: {
    flex: 1,
  },
  
});