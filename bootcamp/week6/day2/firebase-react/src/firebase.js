// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
// USE YOUR CONFIG OBJECT
const firebaseConfig = {
    apiKey: "AIzaSyC_8-9CBYsIn__IErFjs11VGRITrVMb-Po",
    authDomain: "fir-react-8e1e7.firebaseapp.com",
    databaseURL: "https://fir-react-8e1e7.firebaseio.com",
    projectId: "fir-react-8e1e7",
    storageBucket: "",
    messagingSenderId: "490141321241",
    appId: "1:490141321241:web:6793e9f8d0ec3aa0"
};

firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;