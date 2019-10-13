import { WIDTH, HEIGHT, BOTTOM_BAR_PIXELS, NODE_DISTANCE_RATIO} from "./constants"
import * as constants from "./constants"

// generates random x using width of screen
export const randomX = (radius) => {
    return radius + Math.floor(Math.random() * Math.floor(WIDTH - radius * 2))
}
  
// generates random y using height of screen
export const randomY = (radius) => {
  return radius + Math.floor(Math.random() * Math.floor(HEIGHT - radius * 2 - BOTTOM_BAR_PIXELS))
}

// returns a position of the circle 
export const getPosition = (index, radius) => {
  const ratio1 = getLayerRatioMin(index)
  const ratio2 = getLayerRatioMax(index) 
  let xRatio = Math.random()
  let yRatio = Math.random()
  while (!(xRatio > 0.5 - ratio2 && xRatio < 0.5 + ratio2 && yRatio > 0.5 - ratio2 && yRatio < 0.5 + ratio2 && !(xRatio > 0.5 - ratio1 && xRatio < 0.5 + ratio1 && yRatio > 0.5 - ratio1 && yRatio < 0.5 + ratio1))) {
    xRatio = Math.random()
    yRatio = Math.random()
  }
    return [radius + Math.floor(xRatio * Math.floor(WIDTH - radius*2)), radius + Math.floor(yRatio * Math.floor(HEIGHT - radius*2 - BOTTOM_BAR_PIXELS))]
}

//left ratio limit of layers
const getLayerRatioMin = (index) => {
  if (index < constants.LAYER1_NUMBER) {
    return 0
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER) {
    return constants.LAYER1_RATIO
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER + constants.LAYER3_NUMBER) {
    return constants.LAYER2_RATIO
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER + constants.LAYER3_NUMBER + constants.LAYER4_NUMBER) {
    return constants.LAYER3_RATIO
  } else {
    return constants.LAYER4_RATIO
  }
}

//right layer limit of layers
const getLayerRatioMax = (index) => {
  if (index < constants.LAYER1_NUMBER) {
    return constants.LAYER1_RATIO
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER) {
    return constants.LAYER2_RATIO
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER + constants.LAYER3_NUMBER) {
    return constants.LAYER3_RATIO
  } else if (index < constants.LAYER1_NUMBER + constants.LAYER2_NUMBER + constants.LAYER3_NUMBER + constants.LAYER4_NUMBER) {
    return constants.LAYER4_RATIO
  } else {
    return constants.LAYER5_RATIO
  }
}

//checks if both circles have minimum distance
export const minDistance = (x1, y1, x2, y2, radius) => {
  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  if (length > NODE_DISTANCE_RATIO + radius*2) {
    return true
  } else {
    return false
  }
}
  
//checks if the line touches the circle
export const lineTouchCircle = (x1, y1, x2, y2, x3, y3, radius) => {

  // equation of line ax + by + c = 0
  const a = y2 - y1
  const b = x1 - x2
  const c = (x1 * (y1 - y2)) - (y1 * (x1 - x2))

  //finding distance of line from circle
  let distance = Math.abs(a*x3 + b*y3 + c) / Math.sqrt(a*a + b*b)
  if (distance <= radius) {
    return true
  } else {
    return false
  }
}
  
//checks if lines intercept
// p1 = x1y1, q1=y2y2, p2 = x3y3, q2 = x4y4
export const linesIntercept = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  // Find the four orientations needed for general and special cases
  const o1 = orientation(x1, y1, x2, y2, x3, y3)
  const o2 = orientation(x1, y1, x2, y2, x4, y4)
  const o3 = orientation(x3, y3, x4, y4, x1, y1)
  const o4 = orientation(x3, y3, x4, y4, x2, y2)

  // General case 
  if (o1 != o2 && o3 != o4) return true; 

  // Special Cases 
  //p1, q1 and p2 are colinear and p2 lies on segment p1q1 
  if (o1 == 0 && onSegment(x1, y1, x3, y3, x2, y2)) return true; 

  // p1, q1 and q2 are colinear and q2 lies on segment p1q1 
  if (o2 == 0 && onSegment(x1, y1, x4, y4, x2, y2)) return true; 

  // p2, q2 and p1 are colinear and p1 lies on segment p2q2 
  if (o3 == 0 && onSegment(x3, y3, x1, y1, x4, y4)) return true; 

  // p2, q2 and q1 are colinear and q1 lies on segment p2q2 
  if (o4 == 0 && onSegment(x3, y3, x2, y2, x4, y4)) return true; 

  return false; // Doesn't fall in any of the above cases 

}
  
// Given three colinear points p, q, r, the function checks if point q lies on line segment 'pr'
// p = x1y1, q =x2y2, r = x3y3
const onSegment = (x1, y1, x2, y2, x3, y3) => {
  if (x2 <= Math.max(x1, x3) && x2 >= Math.min(x1, x3) && y2 <= Math.max(y1, y3) && y2 >= Math.min(y1, y3)) {
    return true
  } else {
    return false
  }
}
  
// To find orientation of ordered triplet (p, q, r). 
// p = x1y1, q =x2y2, r = x3y3
// The function returns following values 
// 0 --> p, q and r are colinear 
// 1 --> Clockwise 
// 2 --> Counterclockwise 
const orientation = (x1, y1, x2, y2, x3, y3) => {
    const val = ((y2 - y1) * (x3 - x2)) - ((x2 - x1) * (y3 - y2)); 
  
    if (val == 0) return 0 // colinear
    else if (val > 0) return 1 //clockwise
    else return 2 // counterclockwise 
} 
