import axios from "axios";

export function onChange(value) {
  return async function(dispatch) {
    dispatch({
      type: "ON_CHANGE",
      payload: value
    });
  };
}

export function setSuggestions(value) {
  return async function(dispatch) {
    debugger
    dispatch({
      type: "SET_SUGGESTIONS",
      payload: value
    });
  };
}
export function setLocation(filters) {
  return async function(dispatch) {
    try {
      debugger;
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
      dispatch({
        type: "SET_LOCATION",
        payload: response.data
      });
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
}
