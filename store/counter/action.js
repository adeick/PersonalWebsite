import { INCREMENT_COUNTER, DECREMENT_COUNTER, REDUX_CLICK } from "./type";

export const incrementCounter = (incrementState) => (dispatch) => {
  const increase = incrementState + 1;

  return dispatch({
    type: INCREMENT_COUNTER,
    payload: increase,
  });
};

export const decrementCounter = (decrementState) => (dispatch) => {
  const decrease = decrementState - 1;

  return dispatch({
    type: DECREMENT_COUNTER,
    payload: decrease,
  });
};

export const reduxClick = (reduxState) => (dispatch) => {  
    return dispatch({
      type: REDUX_CLICK,
      payload: {amount : (reduxState + 1)},
    });
  };