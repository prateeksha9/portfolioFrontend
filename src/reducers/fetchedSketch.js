import { FETCH_SKETCH } from '../action/actionType';

export default function fetchedSketch(state = [], action) {
  switch (action.type) {
    case FETCH_SKETCH:
      return action.sketch.reverse();
    default:
      return state;
  }
}
