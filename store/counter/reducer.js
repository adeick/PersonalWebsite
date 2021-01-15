import { INCREMENT_COUNTER, DECREMENT_COUNTER, REDUX_CLICK } from "./type";

const initialState = {
  server: "",
  client: "",
  counter: 0,
  noOfReduxClicks: 0,
};

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: action.payload };
    case DECREMENT_COUNTER:
      return { ...state, counter: action.payload };
    case REDUX_CLICK:
      return { ...state, noOfReduxClicks: action.payload.amount };
    default:
      return state;
  }
}