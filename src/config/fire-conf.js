import firebase from 'firebase';

{/* <script src="https://www.gstatic.com/firebasejs/8.2.2/firebase-app.js"></script> */}


const firebaseConfig = {
  apiKey: "AIzaSyCtyK9E_Ov3U8Q2A9lVPdXJNYcknePPcpA",
  authDomain: "adeick.firebaseapp.com",
//   databaseURL: "YOUR DATABASE URL",
  projectId: "adeick",
  storageBucket: "adeick.appspot.com",
  messagingSenderId: "921669108328",
  appId: "1:921669108328:web:44a884857004949718f1dd",
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