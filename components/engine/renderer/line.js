import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

class Line extends PureComponent {
    render() {
      const x1 = this.props.position[0];
      const y1 = this.props.position[1];
      const x2 = this.props.position[2];
      const y2 = this.props.position[3];
      const rotationRad = Math.atan2(y2-y1, x2-x1);
      const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
      return (
        <View style={
          [styles.line, { left: x1 - length / 2 + (x2 - x1) / 2, top: y1 + (y2 - y1) / 2, width: length, height: 0, transform : [{rotate : rotationRad + 'rad'}]}]}>
        </View>
      );
    }
  }
   
  const styles = StyleSheet.create({
    line: {
      borderColor: "#CCC",
      borderWidth: 1,
      backgroundColor: "orange",
      position: "absolute"
    }
  });
   
  export { Line };