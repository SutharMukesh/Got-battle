/* eslint-disable import/prefer-default-export */
/* eslint-disable space-before-function-paren */
import axios from 'axios';

export function setBattlesData(query) {
  return async function(dispatch) {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/?${query}`,
      );
      dispatch({
        type: 'SET_BATTLES',
        payload: response.data,
      });
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };
}
