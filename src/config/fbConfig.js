import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyCzam3QU84qn_bGIrAOsHl3_nTEbP9iD94",
    authDomain: "project-creator-13553.firebaseapp.com",
    databaseURL: "https://project-creator-13553.firebaseio.com",
    projectId: "project-creator-13553",
    storageBucket: "project-creator-13553.appspot.com",
    messagingSenderId: "506776407652",
    appId: "1:506776407652:web:e01028c5e66b603ddcd971",
    measurementId: "G-BJZ8XX9X7M"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore()

  export default firebase