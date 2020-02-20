import axios from "axios";

export function onChange(value, id) {
  return async function(dispatch) {
    debugger;
    dispatch({
      type: "ON_CHANGE",
      id,
      payload: value
    });
  };
}

export function setSuggestions(value, id) {
  return async function(dispatch) {
    debugger;
    dispatch({
      type: "SET_SUGGESTIONS",
      id,
      payload: value
    });
  };
}
export function setBackendData(id) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/list`);
      dispatch({
        type: "SET_BACKENDDATA",
        id,
        payload: response.data
      });
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
}
