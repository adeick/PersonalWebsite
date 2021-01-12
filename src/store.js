import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  username: "",
  rank: 1,
  noOfReduxClicks: 0,
  stones: {
    reality: false,
    space: false,
    time: false,
    soul: false,
    mind: false,
    power: false,    
  }
};

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = (state = { initialState, input: {} }, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.payload.username,
      };
    case 'INCREMENT_REDUX':
      return {
        ...state,
        noOfReduxClicks: action.payload.amount,
      };
    case 'UNLOCK_STONE':
      return {
        ...state,
        stones: {
          ...state.stones,
          [action.payload.stone]: true,
        },
      };
    case 'SET_BIO':
      return {
        ...state,
//        bio: action.payload.txt,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        // username: undefined,
        // bio: undefined,
        // badges: {
        //   student: false,
        //   teacher: false,
        //   creditcard: false,
        //   radar: false,
        //   daynight: false,
        // }
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = composeWithDevTools({
  trace: true,
});

const initializeStore = (preloadedState = initialState) => {
  return createStore(
    persistedReducer,
    preloadedState,
    composeEnhancers(applyMiddleware())
  );
};

// const initializeStore = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware())
// );

const persistor = persistStore(initializeStore);

export { initializeStore, persistor };
