import {
  FETCH_BOOK,
  FETCH_NONTECHNICAL,
  FETCH_POEM,
  FETCH_PROJECTS,
  FETCH_SKETCH,
} from './actionType';
import { APIurls } from '../helpers/url';

export default function fetchPoem() {
  return (dispatch) => {
    const url = APIurls.fetchPoem();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePoem(data.data));
      });
  };
}

export function updatePoem(poem) {
  return {
    type: FETCH_POEM,
    poem,
  };
}

export function fetchProjects() {
  return (dispatch) => {
    const url = APIurls.fetchProject();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateProject(data.data));
      });
  };
}

export function updateProject(project) {
  return {
    type: FETCH_PROJECTS,
    project,
  };
}

export function fetchSketch() {
  return (dispatch) => {
    const url = APIurls.fetchSketch();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateSketch(data.data));
      });
  };
}

export function updateSketch(sketch) {
  return {
    type: FETCH_SKETCH,
    sketch,
  };
}

export function fetchBook() {
  return (dispatch) => {
    const url = APIurls.fetchBook();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateBook(data.data));
      });
  };
}

export function updateBook(book) {
  return {
    type: FETCH_BOOK,
    book,
  };
}

export function fetchNonTechnical() {
  return (dispatch) => {
    const url = APIurls.fetchNonTechnical();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateNonTechnical(data.data));
      });
  };
}

export function updateNonTechnical(nontechnical) {
  console.log('here');
  return {
    type: FETCH_NONTECHNICAL,
    nontechnical,
  };
}
