import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

class Line extends PureComponent {
    render() {
      const x = this.props.position[0];
      const y = this.props.position[1];
      const text = this.props.text;
      return (
        <View style={[styles.line, { left: x, top: y, text: text}]}>
          <Text>{ text }</Text>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    line: {
      borderColor: "#CCC",
      borderWidth: 1,
      width: 600,
      height: 50,
      backgroundColor: "orange",
      position: "absolute"
    }
  });
   
  export { Line };