import { WIDTH, HEIGHT, BOTTOM_BAR_PIXELS, CIRCLE_RADIUS} from "./constants"
import { Circle } from "./renderer/circle"
import { Border} from "./renderer/border"
import React from 'react'

// generates random x using width of screen
export const randomX = () => {
    return CIRCLE_RADIUS + Math.floor(Math.random() * Math.floor(WIDTH - CIRCLE_RADIUS * 2))
}
  
// genertates random y using height of screen
export const randomY = () => {
  return CIRCLE_RADIUS + Math.floor(Math.random() * Math.floor(HEIGHT - CIRCLE_RADIUS * 2 - BOTTOM_BAR_PIXELS))
}

// gets random x-y position
// export const getXYPosition = (i) => {
//   return [randomX(), randomY()];
// }
 
// checks if circle generated overlaps with a circle
export const circleOverlap = (x1, y1, x2, y2) => {
  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  if (length < CIRCLE_RADIUS * 2) {
    return true
  } else {
    return false
  }
}
  
//checks if the line touches the circle
export const lineTouchCircle = (x1, y1, x2, y2, x3, y3) => {

  // equation of line ax + by + c = 0
  const a = y2 - y1
  const b = x1 - x2
  const c = (x1 * (y1 - y2)) - (y1 * (x1 - x2))

  //finding distance of line from circle
  let distance = Math.abs(a*x3 + b*y3 + c) / Math.sqrt(a*a + b*b)
  if (distance <= CIRCLE_RADIUS) {
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

const LAYER1_RATIO = 0.1
const LAYER2_RATIO = 0.2
const LAYER3_RATIO = 0.3
const LAYER4_RATIO = 0.4
const LAYER5_RATIO = 0.5

const NUMBER_OF_LAYERS = 5
const layers = []

points1 = []
points2 = []
points3 = []
points4 = []
points5 = []
points = [points1, points2, points3, points4, points5]

area = [[0, LAYER1_RATIO], [LAYER1_RATIO, LAYER2_RATIO], [LAYER2_RATIO, LAYER3_RATIO], [LAYER3_RATIO, LAYER4_RATIO], [LAYER4_RATIO, LAYER5_RATIO]]
quantity = [2, 4, 5, 6, 8]

let pRegen = null
let pPivot = null

export const dac = () => {
  let number_to_add = 0
  for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
    points[i] = randomDots(area[i][0], area[i][1], number_to_add, quantity[i])
    number_to_add += quantity[i]

    let lowestRad = 1000
    let previousRad = 0
    let anchorCircle = points[i][0]
    let ordered = []
    ordered[0] = anchorCircle
    for (let j = 1; j < quantity[i]; j++) {
      let selected = points[i][j]
      let currentRad = Math.atan2(selected.position[1] - anchorCircle.position[1], selected.position[0] - anchorCircle.position[0])
      if (currentRad < lowestRad) {
        lowestRad = currentRad
      }
    }

  }



  borders = [
    {position: [0.1, 0.1], ratio: 0.8, renderer: <Border />},
    {position: [0.2, 0.2], ratio: 0.6, renderer: <Border />},
    {position: [0.3, 0.3], ratio: 0.4, renderer: <Border />},
    {position: [0.4, 0.4], ratio: 0.2, renderer: <Border />},
  ]

  const entities =
  {
    0 : borders[0],
    1 : borders[1],
    2 : borders[2],
    3 : borders[3],
    4 : points[0][0],
    5 : points[0][1],
    6 : points[1][0],
    7 : points[1][1],
    8 : points[1][2],
    9 : points[1][3],
    10 : points[2][0],
    11 : points[2][1],
    12 : points[2][2],
    13 : points[2][3],
    14 : points[2][4],
    15 : points[3][0],
    16 : points[3][1],
    17 : points[3][2],
    18 : points[3][3],
    19 : points[3][4],
    20 : points[3][5],
    21 : points[4][0],
    22 : points[4][1],
    23 : points[4][2],
    24 : points[4][3],
    25 : points[4][4],
    26 : points[4][5],
    27 : points[4][6],
    28 : points[4][7],
  }

  return entities
}

const randomDots = (ratio1, ratio2, counter, quantity) => {
  let tempCircles = []
  for (let i = 0; i < quantity; i++) {
    position = getPosition(ratio1, ratio2)
    tempCircles[i] = { position: [position[0], position[1]], backgroundColor: "yellow", number: counter+i+1, renderer: <Circle />}
    for (let j = 0; j < i; j++) {
      let circlesOverlap = circleOverlap(tempCircles[j].position[0], tempCircles[j].position[1], tempCircles[i].position[0], tempCircles[i].position[1])
      if (circlesOverlap) {
        i--
        break
      }
    }
  }
  return tempCircles
}

const getPosition = (ratio1, ratio2) => {
  let xRatio = Math.random()
  let yRatio = Math.random()
  while (!(xRatio > 0.5 - ratio2 && xRatio < 0.5 + ratio2 && yRatio > 0.5 - ratio2 && yRatio < 0.5 + ratio2 && !(xRatio > 0.5 - ratio1 && xRatio < 0.5 + ratio1 && yRatio > 0.5 - ratio1 && yRatio < 0.5 + ratio1))) {
    xRatio = Math.random()
    yRatio = Math.random()
  }
  return [CIRCLE_RADIUS + Math.floor(xRatio * Math.floor(WIDTH - CIRCLE_RADIUS*2)), CIRCLE_RADIUS + Math.floor(yRatio * Math.floor(HEIGHT - CIRCLE_RADIUS*2 - BOTTOM_BAR_PIXELS))]
}

// genertates random y using height of screen and ratio
const getRandomX = (ratio1, ratio2) => {
  let ratio = Math.random()

  while (Math.abs(ratio - 0.5) < ratio1 || Math.abs(ratio - 0.5) > ratio2) {
    ratio = Math.random()
  }
  return 60 + Math.floor(ratio * Math.floor(WIDTH - 120))
}

// genertates random y using height of screen and ratio
const getRandomY = (ratio1, ratio2) => {
  let ratio = Math.random()
  while (Math.abs(ratio - 0.5) < ratio1 || Math.abs(ratio - 0.5) > ratio2) {
    ratio = Math.random()
  }
  return 60 + Math.floor(ratio * Math.floor(HEIGHT - 120 - BOTTOM_BAR_PIXELS))
}