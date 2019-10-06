import { NAVIGATION_BAR_PIXELS, NUMBER_OF_NODES, CIRCLE_RADIUS } from "./constants"

const TouchCircle = (entities, { touches }) => {   
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY];
        for (let i = 0; i < NUMBER_OF_NODES; i++) {
            let circle = entities[i];
            if (Math.sqrt(
              ((circle.position[0] - touchOrigin[0]) *
               (circle.position[0] - touchOrigin[0])) +
              ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
               (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= CIRCLE_RADIUS) {
                circle.backgroundColor = "red"
            }
        }
      })   
    return entities;
  };
   
  export { TouchCircle };