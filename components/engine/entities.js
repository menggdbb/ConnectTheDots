import React from 'react'
import { Circle } from "./renderer/circle"
import { Line } from "./renderer/line"
import { NUMBER_OF_NODES, COLOUR_UNTOUCHED, STRING_PART_A, STRING_PART_B, TUTORIAL_NUMBER_OF_NODES, TUTORIAL_STRING_PART_A, TUTORIAL_STRING_PART_B, CIRCLE_RADIUS, TUTORIAL_CIRCLE_RADIUS } from "./constants"
import * as logic from "./creation-logic"

let time_of_start = 0

export default (type) => {

  const circles = []
  const lines = []
  let strings = []
  let numberOfNodes = 0
  let radius = 0

  if (type == "A") {
    strings = STRING_PART_A
    numberOfNodes = NUMBER_OF_NODES
    radius = CIRCLE_RADIUS
  } else if (type == "B") {
    strings = STRING_PART_B
    numberOfNodes = NUMBER_OF_NODES
    radius = CIRCLE_RADIUS
  } else if (type == "TA") {
    strings = TUTORIAL_STRING_PART_A
    numberOfNodes = TUTORIAL_NUMBER_OF_NODES
    radius = TUTORIAL_CIRCLE_RADIUS
  } else if (type == "TB") {
    strings = TUTORIAL_STRING_PART_B
    numberOfNodes = TUTORIAL_NUMBER_OF_NODES
    radius = TUTORIAL_CIRCLE_RADIUS
  }

  let timeStart = new Date().getTime() 

  for (let i = 0; i < numberOfNodes; i++) {
    // generates a circle
    let circlePosition = []
    if (type == "A" || type == "B"){
      circlePosition = logic.getPosition(i, radius)
    } else {
      circlePosition = [logic.randomX(radius), logic.randomY(radius)]
    }
    circles[i] = { position: [circlePosition[0], circlePosition[1]], backgroundColor: COLOUR_UNTOUCHED, string: strings[i], radius: radius, renderer: <Circle />}

    for (let j = 0; j < i; j++) {
      // checks if both circles have minimum distance
      let hasMinDistance = logic.minDistance(circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1], radius)
      if (!hasMinDistance) {
        i-- // if circle less than minimum distance index of current array will regenrate new circle
        break
      }
      if (i > 1 && j < i-1) {
        // checks if generated circle overlaps with all lines
        let circleTouchesLine = logic.lineTouchCircle(circles[j].position[0], circles[j].position[1], circles[j+1].position[0], circles[j+1].position[1], circles[i].position[0], circles[i].position[1], radius)
        // checks if generated line overlaps with all circles
        let lineTouchesCirle = logic.lineTouchCircle(circles[i-1].position[0], circles[i-1].position[1], circles[i].position[0], circles[i].position[1], circles[j].position[0], circles[j].position[1], radius)
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
    if (timeEnd - timeStart > 30) {
      i = 0 //if timeout node creation is restarted
      timeStart = new Date().getTime()
    }
  }

  // returns the entities to be rendered on screen
  let entities = []
  if (type == "A" || type == "B") {
    entities =
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
  } else {
    entities =
    {
      0 : lines[0],
      1 : lines[1],
      2 : lines[2],
      3 : lines[3],
      4 : lines[4],
      5 : circles[0],
      6 : circles[1],
      7 : circles[2],
      8 : circles[3],
      9 : circles[4],
      10 : circles[5],
    }
  }

  time_of_start = new Date().getTime();
  
  return entities;
}

export const getTimeStart = () => {
  return time_of_start
}
