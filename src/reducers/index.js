import { combineReducers } from 'redux';
import fetchedPoem from './fetchedPoem';
import fetchedProject from './fetchedProject';
import fetchedSketch from './fetchedSketch';
import fetchedBook from './fetchedBook';
import fetchedNonTechnical from './fetchNonTechnical';

export default combineReducers({
  fetchedPoem,
  fetchedProject,
  fetchedSketch,
  fetchedBook,
  fetchedNonTechnical,
});
