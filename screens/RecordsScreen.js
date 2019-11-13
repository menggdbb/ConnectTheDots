import React from 'react';
import 'firebase/firestore';
import Firebase from '../components/Firebase';
import { ListItem } from '../components/ListItem'
import { callFromDatabase } from '../components/RecordsComponent'
import { ErrorBoundary } from '../components/ErrorBoundary'
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
    return (
      <ErrorBoundary>
        <View style={styles.container}>
          <Text style={[styles.textStyle, {fontSize: this.state.errorTextSize}]}>
            {this.state.errorText}
          </Text>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderItem.bind(this)} style={styles.listview}/> 
        </View>
      </ErrorBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
	textStyle: {
		textAlign: 'center'
  },
  listview: {
    flex: 1,
  },
  
});