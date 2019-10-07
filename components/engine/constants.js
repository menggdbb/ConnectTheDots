import { Dimensions } from "react-native"

//screen constants
export const NAVIGATION_BAR_PIXELS = 80;
export const BOTTOM_BAR_PIXELS = 140;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

//number of nodes
export const NUMBER_OF_NODES = 25;

//circle radius
const smallSide = Math.min(WIDTH, HEIGHT);
const radiusRatio = 0.04;
export const CIRCLE_RADIUS = smallSide * radiusRatio;