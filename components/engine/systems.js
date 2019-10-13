import { NAVIGATION_BAR_PIXELS, NUMBER_OF_NODES, CIRCLE_RADIUS, COLOUR_TOUCHED } from "./constants"
import { getTimeStart } from "./entities"


//counter for node to be pressed
let counter = 0;

const TouchCircle = (entities, { touches, dispatch }) => {
    // if (entities[24].backgroundColor != COLOUR_TOUCHED && counter != 0) {
    if (entities[28].backgroundColor != COLOUR_TOUCHED && counter != 0) {
      counter = 0
    }   
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY]; //position finger pressed

        // //get touch x y data
        // entities[53].text = 'x: ' + touchOrigin[0] + ', y: ' + touchOrigin[1];

        for (let i = 0; i < NUMBER_OF_NODES; i++) {
            // let circle = entities[i+24]; 
            let circle = entities[i+28];
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
                      errors: 4
                    })
                  }
                  circle.backgroundColor = COLOUR_TOUCHED
                  counter++
                  // if circle is index 1 onwards, line connecting both circles will be shown
                  if (i > 0){
                    // let line = entities[i-1];
                    let line = entities[i-1+4];
                    line.borderColor = "#cccccc";
                  }
                }
                //console.log("x: " + circle.position[0] + ", y: " + circle.position[1])
            }
        }
      })   
    return entities;
  };
   
  export { TouchCircle };