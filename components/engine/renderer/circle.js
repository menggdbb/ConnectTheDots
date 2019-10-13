import React, { PureComponent } from "react";
import { StyleSheet, View, Text } from "react-native";
  
class Circle extends PureComponent {
  render() {
    const radius = this.props.radius; //radius of circle
    const x = this.props.position[0] - radius; // x position
    const y = this.props.position[1] - radius; // y position
    const color = this.props.backgroundColor; // colour of circle
    const string = this.props.string; // number of circle to be show on circle
    return (
      <View style={[styles.circle, { left: x, top: y, backgroundColor: color, borderRadius: radius*2, width: radius*2, height: radius*2}]}>
        <Text style={{left: radius/2, top: radius/2}}>{string}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  circle: {
    borderColor: "#CCC",
    borderWidth: 1,
    position: "absolute",
  },
});
 
export { Circle };