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
const clash = (x1, y1, x2, y2) => {
  const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  if (length < CIRCLE_RADIUS * 2) {
    return true
  } else {
    return false
  }
}

export default (WIDTH, HEIGHT) => {

  const circles = []
  const lines = []

  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    // generates a circle
    circles[i] = { position: [randomX(WIDTH),  randomY(HEIGHT)], backgroundColor: "yellow", number: i+1, renderer: <Circle />}

    // checks if all circles overlaps with current generated circle
    for (let j = 0; j < i; j++) {
      if (clash(circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1])){
        i -= 1 // if clash index of current array will regenerate new circle
      }
      // if circle generate do not clash, line is generated
      if (j == i-1) {
        lines[j] = { position: [circles[j].position[0], circles[j].position[1], circles[i].position[0], circles[i].position[1]], renderer: <Line />}
      }
    }
  }

  // returns the entities to be rendered on screen
  const entities =
  {
    0 : circles[0],
    1 : circles[1],
    2 : circles[2],
    3 : circles[3],
    4 : circles[4],
    5 : circles[5],
    6 : circles[6],
    7 : circles[7],
    8 : circles[8],
    9 : circles[9],
    10 : circles[10],
    11 : circles[11],
    12 : circles[12],
    13 : circles[13],
    14 : circles[14],
    15 : circles[15],
    16 : circles[16],
    17 : circles[17],
    18 : circles[18],
    19 : circles[19],
    20 : circles[20],
    21 : circles[21],
    22 : circles[22],
    23 : circles[23],
    24 : circles[24],
    25 : lines[0],
    26 : lines[1],
    27 : lines[2],
    28 : lines[3],
    29 : lines[4],
    30 : lines[5],
    31 : lines[6],
    32 : lines[7],
    33 : lines[8],
    34 : lines[9],
    35 : lines[10],
    36 : lines[11],
    37 : lines[12],
    38 : lines[13],
    39 : lines[14],
    40 : lines[15],
    41 : lines[16],
    42 : lines[17],
    43 : lines[18],
    44 : lines[19],
    45 : lines[20],
    46 : lines[21],
    47 : lines[22],
    48 : lines[23],
  }
  return entities;
  }