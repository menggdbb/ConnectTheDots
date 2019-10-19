import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ListItem extends Component {
  render() {
    return (
      <View style={styles.li}>
        <Text style={styles.liText}>Nric: {this.props.item.nric}</Text>
        <Text style={styles.liText}>Accuracy: {this.props.item.accuracy}</Text>
        <Text style={styles.liText}>Completion time: {this.props.item.completionTime}</Text>
        <Text style={styles.liText}>Date: {this.props.item.date}</Text>
        <Text style={styles.liText}>Errors: {this.props.item.noOfErrors}</Text>
        <Text style={styles.liText}>Test: {this.props.item.test}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  li: {
    backgroundColor: '#ffffff',
    borderBottomColor: '#eeeeee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
});
   
export { ListItem };
