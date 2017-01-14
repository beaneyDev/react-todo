import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyBFAGhhlLzTVkJa9hx5ZGgbXxpFw3-8CSM",
    authDomain: "mbtodoapp-904dd.firebaseapp.com",
    databaseURL: "https://mbtodoapp-904dd.firebaseio.com",
    storageBucket: "mbtodoapp-904dd.appspot.com",
    messagingSenderId: "861219712612"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
