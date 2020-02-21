// import { FETCH_LOCATION, LOADING_STATE } from "../actions/types";
const initialState = {
  battles: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_BATTLES":
      debugger;
      state.battles = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}
