import { FETCH_NONTECHNICAL } from '../action/actionType';

export default function fetchedNonTechnical(state = [], action) {
  switch (action.type) {
    case FETCH_NONTECHNICAL:
      return action.nontechnical.reverse();

    default:
      return state;
  }
}
