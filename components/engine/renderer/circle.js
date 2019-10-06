import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CIRCLE_RADIUS} from "../constants"

const radius = CIRCLE_RADIUS
  
class Circle extends PureComponent {
  render() {
    const x = this.props.position[0] - radius;
    const y = this.props.position[1] - radius;
    const color = this.props.backgroundColor;
    const number = this.props.number;
    return (
      <View style={[styles.circle, { left: x, top: y, backgroundColor: color}]}>
        <Text style={{left: radius, top: radius}}>{number}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  circle: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: radius * 2,
    width: radius * 2,
    height: radius * 2,
    position: "absolute",
  },
});
 
export { Circle };