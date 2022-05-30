import { FETCH_PROJECTS } from '../action/actionType';

export default function fetchedProject(state = [], action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      console.log(action.project);
      return action.project.reverse();

    default:
      return state;
  }
}
