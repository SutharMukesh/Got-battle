/* eslint-disable space-before-function-paren */
/* eslint-disable no-param-reassign */
// import { FETCH_LOCATION, LOADING_STATE } from "../actions/types";
const initialState = {
  locationid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
  battlenameid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
  regionid: {
    backenddata: [],
    value: '',
    suggestion: [],
  },
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ON_CHANGE':
      // debugger;
      state[action.id].value = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    case 'SET_BACKENDDATA':
      state[action.id].backenddata = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    case 'SET_SUGGESTIONS':
      // debugger;
      state[action.id].suggestion = action.payload;
      return { ...state, [action.id]: { ...state[action.id] } };
    default:
      return { ...state };
  }
}
