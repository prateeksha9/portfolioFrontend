import { FETCH_POEM } from '../action/actionType';

export default function fetchedPoem(state = [], action) {
  switch (action.type) {
    case FETCH_POEM:
      return action.poem.reverse();

    default:
      return state;
  }
}
