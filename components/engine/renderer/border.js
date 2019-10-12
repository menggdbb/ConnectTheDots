import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { WIDTH, HEIGHT, BOTTOM_BAR_PIXELS, CIRCLE_RADIUS} from '../constants'
  


class Border extends PureComponent {
  render() {
    //const x = this.props.position[0] * WIDTH; // x position
    const x = CIRCLE_RADIUS + Math.floor(this.props.position[0] * Math.floor(WIDTH - CIRCLE_RADIUS*2))
    //const y = this.props.position[1] * HEIGHT; // y position
    const y = CIRCLE_RADIUS + Math.floor(this.props.position[1] * Math.floor(HEIGHT - CIRCLE_RADIUS*2 - BOTTOM_BAR_PIXELS))
    const ratio = this.props.ratio
    const width = Math.floor(ratio * Math.floor(WIDTH - CIRCLE_RADIUS))
    const height = Math.floor(ratio * Math.floor(HEIGHT - CIRCLE_RADIUS*2 - BOTTOM_BAR_PIXELS))
    return (
      <View style={[styles.border, { left: x, top: y, ratio: ratio, width: width, height: height}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderColor: "#CCC",
    borderWidth: 4,
    backgroundColor: "white",
    position: "absolute", 
  },
});
 
export { Border };