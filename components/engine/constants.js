import { Dimensions } from "react-native"

//screen constants
export const NAVIGATION_BAR_PIXELS = 80;
export const BOTTOM_BAR_PIXELS = 85;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");


//number of nodes
export const NUMBER_OF_NODES = 25;

//circle radius
const smallSide = Math.min(WIDTH, HEIGHT); 
const radiusRatio = 0.04;
export const CIRCLE_RADIUS = smallSide * radiusRatio;

//node distance constant
distanceRatio = 0.08;
export const NODE_DISTANCE = CIRCLE_RADIUS*2 + smallSide * distanceRatio;

//colour constants
export const COLOUR_UNTOUCHED = "#CAC4C4"
export const COLOUR_TOUCHED = "#65F987"

//layer constants
export const LAYER1_RATIO = 0.1
export const LAYER2_RATIO = 0.2
export const LAYER3_RATIO = 0.3
export const LAYER4_RATIO = 0.4
export const LAYER5_RATIO = 0.5

export const LAYER1_NUMBER = 2
export const LAYER2_NUMBER = 4
export const LAYER3_NUMBER = 5
export const LAYER4_NUMBER = 6
export const LAYER5_NUMBER = 8