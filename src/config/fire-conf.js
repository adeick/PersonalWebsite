import firebase from 'firebase';

{/* <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script> */}


const firebaseConfig = {
  apiKey: `process.env.fireBaseAPIKey`, 
  authDomain: "adeick.firebaseapp.com",
//   databaseURL: "YOUR DATABASE URL",
  projectId: "adeick",
  storageBucket: "adeick.appspot.com",
  messagingSenderId: `messagingSenderID`, 
  appId: `process.env.firebaseAppID`, 
//   measurementId: "G-WHSX17GCW4"
};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;