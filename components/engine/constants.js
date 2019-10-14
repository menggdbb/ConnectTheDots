import { Dimensions } from "react-native"

//screen constants
export const NAVIGATION_BAR_PIXELS = 80;
export const BOTTOM_BAR_PIXELS = 85;
export const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");
export const TUTORIAL_BOTTOM_MARGIN = 100;

//number of nodes
export const NUMBER_OF_NODES = 25;
export const TUTORIAL_NUMBER_OF_NODES = 6;

//circle radius
const smallSide = Math.min(WIDTH, HEIGHT); 
const radiusRatio = 0.04;
export const CIRCLE_RADIUS = smallSide * radiusRatio;

const tutorialRadiusRatio = 0.1;
export const TUTORIAL_CIRCLE_RADIUS = smallSide * tutorialRadiusRatio;

//node distance constant
distanceRatio = 0.02;
export const NODE_DISTANCE_RATIO = smallSide * distanceRatio;

//colour constants
export const COLOUR_UNTOUCHED = "#CAC4C4"
export const COLOUR_TOUCHED = "#65F987"
export const COLOUR_WRONG = "#FF0000"
export const LINE_COLOUR = "#CCCCCC"

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

//string array for nodes
export const STRING_PART_A = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
    "20", "21", "22", "23", "24", "25"
]

export const STRING_PART_B = [
    "1", "A", 
    "2", "B", 
    "3", "C", 
    "4", "D", 
    "5", "E", 
    "6", "F", 
    "7", "G", 
    "8", "H", 
    "9", "I", 
    "10", "J",
    "11", "K", 
    "12", "L",
    "13"
]

export const TUTORIAL_STRING_PART_A = ["1", "2", "3", "4", "5", "6"]
export const TUTORIAL_STRING_PART_B = ["1", "A", "2", "B", "3", "C"]

