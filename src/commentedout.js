// const initialState = {
//     username: "",
//     rank: 1,
//     noOfReduxClicks: 0,
//     stones: {
//       reality: false,
//       space: false,
//       time: false,
//       soul: false,
//       mind: false,
//       power: false,    
//     }
//   };
  
//   const persistConfig = {
//     key: 'root',
//     storage,
//   }
  
//   const reducer = (state = { initialState, input: {} }, action) => {
//     switch (action.type) {
//       case 'SET_USERNAME':
//         return {
//           ...state,
//           username: action.payload.username,
//         };
//       case 'INCREMENT_REDUX':
//         return {
//           ...state,
//           noOfReduxClicks: action.payload.amount,
//         };
//       case 'UNLOCK_STONE':
//         return {
//           ...state,
//           stones: {
//             ...state.stones,
//             [action.payload.stone]: true,
//           },
//         };
//       case 'SET_BIO':
//         return {
//           ...state,
//   //        bio: action.payload.txt,
//         };
//       case 'USER_LOGOUT':
//         return {
//           ...state,
//           // username: undefined,
//           // bio: undefined,
//           // badges: {
//           //   student: false,
//           //   teacher: false,
//           //   creditcard: false,
//           //   radar: false,
//           //   daynight: false,
//           // }
//         };
//       default:
//         return state;
//     }
//   };