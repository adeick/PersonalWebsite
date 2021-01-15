import { SET_USERNAME, INCREMENT_REDUX, UNLOCK_STONE } from "./type";

const initialState = {
    server: "",
    client: "",
    username: "",
    reduxClicks: 0,
    stones: {
      reality: false,
      space: false,
      time: false,
      soul: false,
      mind: false,
      power: false,    
    }
  };

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return { ...state, username: action.payload };
    case INCREMENT_REDUX:
      return { ...state, reduxClicks: action.payload };
    case UNLOCK_STONE:
      return { ...state, stones: { ...state.stones, [action.payload] : true }};
    default:
      return state;
  }
}
