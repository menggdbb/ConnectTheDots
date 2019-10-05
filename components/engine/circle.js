import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
 
export const RADIUS = 60;
 
class Circle extends PureComponent {
  render() {
    const x = this.props.position[0] - RADIUS;
    const y = this.props.position[1] - RADIUS;
    const color = this.props.backgroundColor;
    return (
      <View style={[styles.circle, { left: x, top: y, backgroundColor: color}]} />
    );
  }
}
 
const styles = StyleSheet.create({
  circle: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    position: "absolute"
  }
});
 
export { Circle };