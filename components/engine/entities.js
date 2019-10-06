import React from 'react'
import { Circle } from "./renderer/circle"
import { BOTTOM_BAR_PIXELS, NUMBER_OF_NODES } from "./constants"

const randomX = (WIDTH) => {
  return 60 + Math.floor(Math.random() * Math.floor(WIDTH - 120))
}

const randomY = (HEIGHT) => {
  return 60 + Math.floor(Math.random() * Math.floor(HEIGHT - 120 - BOTTOM_BAR_PIXELS))
}

export default (WIDTH, HEIGHT) => {

  const circles = []
  for (let i = 0; i < NUMBER_OF_NODES; i++) {
    circles[i] = { position: [randomX(WIDTH),  randomY(HEIGHT)], backgroundColor: "yellow", number: i+1, renderer: <Circle />}
  }


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
  }
  return entities;
  }