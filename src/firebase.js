import firebase from 'firebase';

<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>

  const config = {
    apiKey: "AIzaSyBpAX_sqjotWqdllBdGmGU5wqGC4-ch8t4",
    authDomain: "first-flight-33344.firebaseapp.com",
    databaseURL: "https://first-flight-33344.firebaseio.com",
    projectId: "first-flight-33344",
    storageBucket: "",
    messagingSenderId: "345604907102"
  };
  firebase.initializeApp(config);

  export default firebase;

  export const database = firebase.database();