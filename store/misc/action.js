import { SET_USERNAME, INCREMENT_REDUX, UNLOCK_STONE, INCREMENT_STARWARS } from "./type";

export const setUsername = (newUsername) => (dispatch) => {

  return dispatch({
    type: SET_USERNAME,
    payload: newUsername,
  });
};

export const incrementRedux = (noOfReduxClicks) => (dispatch) => {
  const newAmount = noOfReduxClicks + 1;

  return dispatch({
    type: INCREMENT_REDUX,
    payload: newAmount,
  });
};

export const unlockStone = (stoneType) => (dispatch) => {  
    return dispatch({
      type: UNLOCK_STONE,
      payload: stoneType,
    });
  };

export const incrementStarWars = (currentLevel) => (dispatch) => {
  const newLevel = currentLevel + 1;

  return dispatch({
    type: INCREMENT_STARWARS,
    payload: newLevel,
  });
};
