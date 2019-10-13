import { NAVIGATION_BAR_PIXELS, NUMBER_OF_NODES, CIRCLE_RADIUS, COLOUR_TOUCHED } from "./constants"
import { getTimeStart } from "./entities"


//counter for node to be pressed
let counter = 0;
let error = 0;

const TouchCircle = (entities, { touches, dispatch }) => {
  // if reseted
  if (entities[24].backgroundColor != COLOUR_TOUCHED && counter != 0) {
    counter = 0
    error = 0
  }
  // if circle is touched
  touches.filter(t => t.type === "press").forEach(t => {
      let touchOrigin = [t.event.pageX, t.event.pageY]; //position finger pressed

      for (let i = 0; i < NUMBER_OF_NODES; i++) {
          let circle = entities[i+24]; 
          // checks if finger position within circle
          if (Math.sqrt(
            ((circle.position[0] - touchOrigin[0]) *
              (circle.position[0] - touchOrigin[0])) +
            ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
              (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= CIRCLE_RADIUS) {
              // if node to be pressed is the circle
              if (counter == i) {
                // last node pressed
                if (counter == 24){
                  dispatch({
                    type: "game-over",
                    timing: new Date().getTime() - getTimeStart(),
                    errors: error
                  })
                }
                circle.backgroundColor = COLOUR_TOUCHED
                counter++
                // if circle is index 1 onwards, line connecting both circles will be shown
                if (i > 0){
                  let line = entities[i-1];
                  line.borderColor = "#cccccc";
                }
              } else {
                error++
              }
          }
      }
    })   
    return entities;
  };
   
  export { TouchCircle };