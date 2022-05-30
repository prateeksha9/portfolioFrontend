import { FETCH_BOOK } from '../action/actionType';

export default function fetchedBook(state = [], action) {
  switch (action.type) {
    case FETCH_BOOK:
      return action.book.reverse();

    default:
      return state;
  }
}
