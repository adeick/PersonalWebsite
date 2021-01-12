import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  name: "null",
};

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = (state = { initialState, input: {} }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
//        username: action.payload.txt,
      };
    case 'SET_BADGE':
      return {
        ...state,
        // badges: {
        //   ...state.badges,
        //   [action.payload.badge]: action.payload.unlocked,
        // },
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

// const initializeStore = (preloadedState = initialState) => {
//   return createStore(
//     persistedReducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware())
//   );
// };

const initializeStore = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);

const persistor = persistStore(initializeStore);

export { initializeStore, persistor };
