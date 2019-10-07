import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

class Line extends PureComponent {
    render() {
      const x1 = this.props.position[0]; // x position of circle 1
      const y1 = this.props.position[1]; // y position of circle 1
      const x2 = this.props.position[2]; // x position of circle 2
      const y2 = this.props.position[3]; // y postion of circle 2
      const rotationRad = Math.atan2(y2-y1, x2-x1); // finds the angle to rotate the line
      const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)); // length of the line
      const color = this.props.borderColor; //color of line
      return (
        <View style={
          [styles.line, { borderColor: color, left: x1 - length / 2 + (x2 - x1) / 2, top: y1 + (y2 - y1) / 2, width: length, height: 0, transform : [{rotate : rotationRad + 'rad'}]}]}>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    line: {
      borderWidth: 1,
      backgroundColor: "white",
      position: "absolute",
    }
  });
   
  export { Line };