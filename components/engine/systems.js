import { RADIUS } from "./circle";

const NAVIGATION_BAR_PIXELS = 80;

const TouchCircle = (entities, { touches }) => {   
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY];

        entities[5].text = touchOrigin[0] + ":" + touchOrigin[1];

        for (let i = 0; i < 5; i++) {
            let circle = entities[i];
            if (Math.sqrt(
              ((circle.position[0] - touchOrigin[0]) *
               (circle.position[0] - touchOrigin[0])) +
              ((circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]) *
               (circle.position[1] + NAVIGATION_BAR_PIXELS - touchOrigin[1]))) <= RADIUS) {
                circle.backgroundColor = "red"
            }
        }
      })   
    return entities;
  };
   
  export { TouchCircle };