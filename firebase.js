import firebase from "firebase/app";
import "firebase/database";
import 'firebase/auth'

const firebaseConfig = {

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBROhHLWfG3x6taghlHoK0VF8RFk8wBQ6I",
    authDomain: "topscholar-1a85b.firebaseapp.com",
    databaseURL: "https://topscholar-1a85b-default-rtdb.firebaseio.com",
    projectId: "topscholar-1a85b",
    storageBucket: "topscholar-1a85b.appspot.com",
    messagingSenderId: "1081040506218",
    appId: "1:1081040506218:web:6442e84142d331b06fe913",
    measurementId: "G-BGRXGY824K"
  
};

firebase.initializeApp(firebaseConfig);


export { firebase };