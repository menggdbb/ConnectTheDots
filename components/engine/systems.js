import { RADIUS } from "./circle";

const NAVIGATION_BAR_PIXELS = 80;
const BOTTOM_BAR_PIXELS = 140;

const TouchCircle = (entities, { touches }) => {   
    touches.filter(t => t.type === "press").forEach(t => {
        let touchOrigin = [t.event.pageX, t.event.pageY];

        //get touch x y data
        entities[3].text = 'x: ' + touchOrigin[0] + ', y: ' + touchOrigin[1];

        for (let i = 0; i < 2; i++) {
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