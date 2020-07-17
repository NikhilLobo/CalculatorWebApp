import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB0PXnCVIC0ydnin8_3JuOeRgD2zDD98Cg",
    authDomain: "calculatorapp-5ec8e.firebaseapp.com",
    databaseURL: "https://calculatorapp-5ec8e.firebaseio.com",
    projectId: "calculatorapp-5ec8e",
    storageBucket: "calculatorapp-5ec8e.appspot.com",
    messagingSenderId: "145544614878",
    appId: "1:145544614878:web:2a76df88611e23d186c34f",
    measurementId: "G-KZ2DM3XKTP"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
