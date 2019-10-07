import { NAVIGATION_BAR_PIXELS, NUMBER_OF_NODES, CIRCLE_RADIUS } from "./constants"

let counter = 0;

const TouchCircle = (entities, { touches }) => {   
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY];
        for (let i = 0; i < NUMBER_OF_NODES; i++) {
            let circle = entities[i+24];
            if (Math.sqrt(
              ((circle.position[0] - touchOrigin[0]) *
               (circle.position[0] - touchOrigin[0])) +
              ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
               (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= CIRCLE_RADIUS) {
                if (counter == i) {
                  circle.backgroundColor = "red"
                  counter++
                  if (i > 0){
                    let line = entities[i-1];
                    line.borderColor = "#cccccc";
                  }
                }

                console.log("x: " + circle.position[0] + ", y: " + circle.position[1])
            }
        }
      })   
    return entities;
  };
   
  export { TouchCircle };