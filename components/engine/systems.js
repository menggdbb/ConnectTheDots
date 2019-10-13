import { NAVIGATION_BAR_PIXELS, NUMBER_OF_NODES, TUTORIAL_NUMBER_OF_NODES, CIRCLE_RADIUS, COLOUR_UNTOUCHED,COLOUR_TOUCHED, LINE_COLOUR, COLOUR_WRONG } from "./constants"
import { getTimeStart } from "./entities"


//counter for node to be pressed
let counter = 0;
let error = 0;

let tutorialCounter = 0;

const TouchCircle = (entities, { touches, dispatch }) => {
  // if reseted
  if (entities[NUMBER_OF_NODES-1].backgroundColor != COLOUR_TOUCHED && counter != 0) {
    counter = 0
    error = 0
  }
  // if circle is touched
  touches.filter(t => t.type === "press").forEach(t => {
      let touchOrigin = [t.event.pageX, t.event.pageY]; //position finger pressed

      for (let i = 0; i < NUMBER_OF_NODES; i++) {
          let circle = entities[i+NUMBER_OF_NODES-1]; 
          // checks if finger position within circle
          if (Math.sqrt(
            ((circle.position[0] - touchOrigin[0]) *
              (circle.position[0] - touchOrigin[0])) +
            ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
              (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= CIRCLE_RADIUS) {
              // if node to be pressed is the circle
              if (counter == i) {
                // final node pressed
                if (counter == NUMBER_OF_NODES - 1){
                  dispatch({
                    type: "finished",
                    timing: new Date().getTime() - getTimeStart(),
                    errors: error
                  })
                }
                circle.backgroundColor = COLOUR_TOUCHED
                counter++

                // if there are circles pressed wrongly, reset
                for (j = counter; j < NUMBER_OF_NODES; j++){
                  let circle_reset = entities[j+NUMBER_OF_NODES-1];
                  circle_reset.backgroundColor = COLOUR_UNTOUCHED
                }

                // if circle is index 1 onwards, line connecting both circles will be shown
                if (i > 0){
                  let line = entities[i-1];
                  line.borderColor = LINE_COLOUR;
                }
              } else if (i > counter ) {
                //TODO feedback for wrong circle
                circle.backgroundColor = COLOUR_WRONG
                error++
              }
          }
      }
    })   
    return entities;
  };

  const TutorialTouchCircle = (entities, { touches }) => {
    // if reseted
    if (entities[TUTORIAL_NUMBER_OF_NODES-1].backgroundColor != COLOUR_TOUCHED && counter != 0) {
      tutorialCounter = 0
    }
    // if circle is touched
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY]; //position finger pressed
  
        for (let i = 0; i < TUTORIAL_NUMBER_OF_NODES; i++) {
            let circle = entities[i+TUTORIAL_NUMBER_OF_NODES-1]; 
            // checks if finger position within circle
            if (Math.sqrt(
              ((circle.position[0] - touchOrigin[0]) *
                (circle.position[0] - touchOrigin[0])) +
              ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
                (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= CIRCLE_RADIUS) {
                // if node to be pressed is the circle
                if (tutorialCountercounter == i) {                  
                  circle.backgroundColor = COLOUR_TOUCHED
                  tutorialCounter++
  
                  // if there are circles pressed wrongly, resetted
                  for (j = counter; j < TUTORIAL_NUMBER_OF_NODES; j++){
                    let circle_reset = entities[j+TUTORIAL_NUMBER_OF_NODES-1];
                    circle_reset.backgroundColor = COLOUR_UNTOUCHED
                  }
  
                  // if circle is index 1 onwards, line connecting both circles will be shown
                  if (i > 0){
                    let line = entities[i-1];
                    line.borderColor = LINE_COLOUR;
                  }
                } else if (i > counter ) {
                  //TODO feedback for wrong circle
                  circle.backgroundColor = COLOUR_WRONG
                }
            }
        }
      })   
      return entities;
    };
   
  export { TouchCircle, TutorialTouchCircle };