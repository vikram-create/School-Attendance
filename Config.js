import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDPrxDa3qaBXsAOvniIN6vzuAbPU5GosJc",
    authDomain: "school-attendance-a92c8.firebaseapp.com",
    databaseURL: "https://school-attendance-a92c8.firebaseio.com",
    projectId: "school-attendance-a92c8",
    storageBucket: "school-attendance-a92c8.appspot.com",
    messagingSenderId: "790370119956",
    appId: "1:790370119956:web:3918fca349dbd07d4ed201",
    measurementId: "G-LZ5ERQGLXJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  