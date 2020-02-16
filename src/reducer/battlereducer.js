// import { FETCH_LOCATION, LOADING_STATE } from "../actions/types";
const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_LOCATION":
      debugger;
      state.location = action.payload;
      return { ...state };
    case "ON_CHANGE":
      debugger;
      state.value = action.payload;
      return { ...state };
    case "SET_SUGGESTIONS":
      debugger;
      state.suggestions = action.payload;
      return { ...state };
    default:
      return state;
  }
}
