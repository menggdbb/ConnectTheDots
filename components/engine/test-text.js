import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";

class TestText extends PureComponent {
    render() {
      const text = this.props.text;
      const width = this.props.width;
      const top = this.props.top;
      return (
        <View style={[styles.testText, { left: 0, top: top, width: width, height: 50}]}>
            <Text>{text}</Text>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    testText: {
      borderColor: "#CCC",
      borderWidth: 1,
      backgroundColor: "orange",
      position: "absolute"
    }
  });
   
  export { TestText };