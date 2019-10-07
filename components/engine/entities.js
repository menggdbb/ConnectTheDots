import React from 'react'
import { Circle } from "./renderer/circle"
import { Line } from "./renderer/line"
import { NUMBER_OF_NODES, CIRCLE_RADIUS } from "./constants"
import * as logic from "./creation-logic"

export default () => {

  const circles = []
  const lines = []

  const initialTime = new Date().getTime()
  let timeStart = new Date().getTime()
  let done = false

  let miss = 0

  // circles[0] = { position: [WIDTH / 2,  HEIGHT / 2], backgroundColor: "yellow", number: 1, renderer: <Circle />}

  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    // generates a circle
    circles[i] = { position: [logic.randomX(), logic.randomY()], backgroundColor: "yellow", number: i+1, renderer: <Circle />}

    for (let j = 0; j < i; j++) {
      // checks if all circles overlaps with current generated circle
      let circleOverlaps = logic.circleOverlap(circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1])
      if (circleOverlaps) {
        i -- // if clash index of current array will regenerate new circle
        break
      }
      if (i > 1 && j < i-1) {
        // checks if generated circle overlaps with all lines
        let circleTouchesLine = logic.lineTouchCircle(circles[j].position[0], circles[j].position[1], circles[j+1].position[0], circles[j+1].position[1], circles[i].position[0], circles[i].position[1])
        // checks if generated line overlaps with all circles
        let lineTouchesCirle = logic.lineTouchCircle(circles[i-1].position[0], circles[i-1].position[1], circles[i].position[0], circles[i].position[1], circles[j].position[0], circles[j].position[1])
        // checks if generated line intercepts with other lines
        let linesIntercepts = false
        if (j+1 != i-1) {
          linesIntercepts = logic.linesIntercept(
            circles[j].position[0], circles[j].position[1], circles[j+1].position[0], circles[j+1].position[1],
            circles[i-1].position[0], circles[i-1].position[1], circles[i].position[0], circles[i].position[1])
        }
        //checks for the 3 conditions
        if (circleTouchesLine || lineTouchesCirle || linesIntercepts) {
          i-- // if clash index of current array will regenerate new circle
          break
        }
      }

      if (j == i-1) {
        // if circle generate do not clash, line is generated
        lines[j] = { borderColor: "white", position: [circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1]], renderer: <Line />}
      }
    }
    
    //timeout
    let timeEnd = new Date().getTime()
    if (timeEnd - timeStart > 30 && !done) {
      console.log(i + ': restarted')
      i = 0
      // if (miss == 3){
      //   i--
      //   miss = 0
      // } else {
      //   miss++
      // }
      timeStart = new Date().getTime()
    }
  }
  done = !done
  // console.log(new Date().getTime() - timeStart)
  console.log("total: " + (new Date().getTime() - initialTime))

  // returns the entities to be rendered on screen
  const entities =
  {
    0 : lines[0],
    1 : lines[1],
    2 : lines[2],
    3 : lines[3],
    4 : lines[4],
    5 : lines[5],
    6 : lines[6],
    7 : lines[7],
    8 : lines[8],
    9 : lines[9],
    10 : lines[10],
    11 : lines[11],
    12 : lines[12],
    13 : lines[13],
    14 : lines[14],
    15 : lines[15],
    16 : lines[16],
    17 : lines[17],
    18 : lines[18],
    19 : lines[19],
    20 : lines[20],
    21 : lines[21],
    22 : lines[22],
    23 : lines[23],
    24 : circles[0],
    25 : circles[1],
    26 : circles[2],
    27 : circles[3],
    28 : circles[4],
    29 : circles[5],
    30 : circles[6],
    31 : circles[7],
    32 : circles[8],
    33 : circles[9],
    34 : circles[10],
    35 : circles[11],
    36 : circles[12],
    37 : circles[13],
    38 : circles[14],
    39 : circles[15],
    40 : circles[16],
    41 : circles[17],
    42 : circles[18],
    43 : circles[19],
    44 : circles[20],
    45 : circles[21],
    46 : circles[22],
    47 : circles[23],
    48 : circles[24],
  }
  
  return entities;
}