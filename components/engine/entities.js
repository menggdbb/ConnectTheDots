import React from 'react'
import { Circle } from "./renderer/circle"
import { Line } from "./renderer/line"
import { BOTTOM_BAR_PIXELS, NUMBER_OF_NODES, CIRCLE_RADIUS } from "./constants"

// generates random x using width of screen
const randomX = (WIDTH) => {
  return 60 + Math.floor(Math.random() * Math.floor(WIDTH - 120))
}

// genertates random y using height of screen
const randomY = (HEIGHT) => {
  return 60 + Math.floor(Math.random() * Math.floor(HEIGHT - 120 - BOTTOM_BAR_PIXELS))
}

// checks if circle generated overlaps with a circle
const circleOverlap = (x1, y1, x2, y2) => {
  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  if (length < CIRCLE_RADIUS * 2) {
    return true
  } else {
    return false
  }
}

//checks if the line touches the circle
const lineTouchCircle = (x1, y1, x2, y2, x3, y3) => {

  // equation of line ax + by + c = 0
  const a = y2 - y1
  const b = x1 - x2
  const c = (x1 * (y1 - y2)) - (y1 * (x1 - x2))

  //finding distance of line from circle
  let distance = Math.abs(a*x3 + b*y3 + c) / Math.sqrt(x3*x3 + y3*y3)
  if (distance <= CIRCLE_RADIUS) {
    return true
  } else {
    return false
  }
}

//checks if lines intercept
// p1 = x1y1, q1=y2y2, p2 = x3y3, q2 = x4y4
const linesIntercept = (x1, y1, x2, y2, x3, y3, x4, y4) => {
  // Find the four orientations needed for general and special cases
  const o1 = orientation(x1, y1, x2, y2, x3, y3)
  const o2 = orientation(x1, y1, x2, y2, x4, y4)
  const o3 = orientation(x3, y3, x4, y4, x1, y1)
  const o4 = orientation(x3, y3, x4, y4, x2, y2)

  // General case 
  // if (o1 != o2 && o3 != o4) return true; 

  // Special Cases 
  // p1, q1 and p2 are colinear and p2 lies on segment p1q1 
  // if (o1 == 0 && onSegment(x1, y1, x3, y3, x2, y2)) return true; 

  // // p1, q1 and q2 are colinear and q2 lies on segment p1q1 
  // if (o2 == 0 && onSegment(x1, y1, x4, y4, x2, y2)) return true; 

  // // p2, q2 and p1 are colinear and p1 lies on segment p2q2 
  // if (o3 == 0 && onSegment(x3, y3, x1, y1, x4, y4)) return true; 

  // // p2, q2 and q1 are colinear and q1 lies on segment p2q2 
  // if (o4 == 0 && onSegment(x3, y3, x2, y2, x4, y4)) return true; 

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

const notInScreen = (x1, y1, WIDTH, HEIGHT) => {
  if (x1 < CIRCLE_RADIUS || x1 > WIDTH - CIRCLE_RADIUS || y1 < CIRCLE_RADIUS || y1 > HEIGHT - CIRCLE_RADIUS) return true
  else return false
}


export default (WIDTH, HEIGHT) => {

  const circles = []
  const lines = []

  let timeStart = new Date().getMilliseconds

  // circles[0] = { position: [WIDTH / 2,  HEIGHT / 2], backgroundColor: "yellow", number: 1, renderer: <Circle />}

  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    // generates a circle
    // if (i > 0) {
    circles[i] = { position: [randomX(WIDTH),  (randomY(HEIGHT))], backgroundColor: "yellow", number: i+1, renderer: <Circle />}
    // }

    if (notInScreen(circles[i].position[0], circles[i].position[1], WIDTH, HEIGHT)){
      console.log("not in screen, i: " + i)
    }

    // if (i > 0 && Math.sqrt(
    //   (circles[i-1].position[0] - circles[i].position[0]) * (circles[i-1].position[0] - circles[i].position[0]) +
    //   (circles[i-1].position[1] - circles[i].position[1]) * (circles[i-1].position[1] - circles[i].position[1])) > WIDTH * 0.3 ) {
    //     i--
    //     continue
    // }

    // checks if all circles overlaps with current generated circle
    for (let j = 0; j < i; j++) {
      let circleOverlaps = circleOverlap(circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1])
      if (circleOverlaps) {
        console.log('overlap, i: ' + i + ' ,j: ' + j)
        i -= 1 // if clash index of current array will regenerate new circle
        break
      }
      if (i > 1 && j < i-1) {
        // checks if generated circle overlaps with all lines
        let circleTouchesLine = lineTouchCircle(circles[j].position[0], circles[j].position[1], circles[j+1].position[0], circles[j+1].position[1], circles[i].position[0], circles[i].position[1])
        // checks if generated line overlaps with all circles
        let lineTouchesCirle = lineTouchCircle(circles[i-1].position[0], circles[i-1].position[1], circles[i].position[0], circles[i].position[1], circles[j].position[0], circles[j].position[1])
        // checks if generated line intercepts with other lines
        let linesIntercepts = linesIntercept(
          circles[j].position[0], circles[j].position[1], circles[j+1].position[0], circles[j+1].position[1],
          circles[i-1].position[0], circles[i-1].position[1], circles[i].position[0], circles[i].position[1])
        if (circleTouchesLine || lineTouchesCirle || linesIntercepts) {
          console.log('line, i: ' + i + ' ,j: ' + j)
          i-- // if clash index of current array will regenerate new circle
          break
        }
      }

      if (j == i-1) {
        // if circle generate do not clash, line is generated
        lines[j] = { position: [circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1]], renderer: <Line />}
      }
    }

    //timeout
    // let timeEnd = new Date().getMilliseconds
    // if (timeEnd - timeStart > 1000){
    //   i = 0
    // }
  }

  // returns the entities to be rendered on screen
  const entities =
  {
    0 : circles[0],
    1 : circles[1],
    2 : circles[2],
    3 : circles[3],
    4 : circles[4],
    // 5 : circles[5],
    // 6 : circles[6],
    // 7 : circles[7],
    // 8 : circles[8],
    // 9 : circles[9],
    // 10 : circles[10],
    // 11 : circles[11],
    // 12 : circles[12],
    // 13 : circles[13],
    // 14 : circles[14],
    // 15 : circles[15],
    // 16 : circles[16],
    // 17 : circles[17],
    // 18 : circles[18],
    // 19 : circles[19],
    // 20 : circles[20],
    // 21 : circles[21],
    // 22 : circles[22],
    // 23 : circles[23],
    // 24 : circles[24],
    25 : lines[0],
    26 : lines[1],
    27 : lines[2],
    28 : lines[3],
    // 29 : lines[4],
    // 30 : lines[5],
    // 31 : lines[6],
    // 32 : lines[7],
    // 33 : lines[8],
    // 34 : lines[9],
    // 35 : lines[10],
    // 36 : lines[11],
    // 37 : lines[12],
    // 38 : lines[13],
    // 39 : lines[14],
    // 40 : lines[15],
    // 41 : lines[16],
    // 42 : lines[17],
    // 43 : lines[18],
    // 44 : lines[19],
    // 45 : lines[20],
    // 46 : lines[21],
    // 47 : lines[22],
    // 48 : lines[23],
  }
  
  return entities;
}