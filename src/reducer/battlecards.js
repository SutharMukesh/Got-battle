/* eslint-disable space-before-function-paren */
/* eslint-disable no-param-reassign */
// import { FETCH_LOCATION, LOADING_STATE } from "../actions/types";
const initialState = {
  battles: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'SET_BATTLES':
      state.battles = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}
