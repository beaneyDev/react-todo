import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBFAGhhlLzTVkJa9hx5ZGgbXxpFw3-8CSM",
  authDomain: "mbtodoapp-904dd.firebaseapp.com",
  databaseURL: "https://mbtodoapp-904dd.firebaseio.com",
  storageBucket: "mbtodoapp-904dd.appspot.com",
  messagingSenderId: "861219712612"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Matt',
    age: 26
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('value', (snapshot) => {
  console.log('whole todos', snapshot.val())
})

todosRef.on('child_added', (snapshot) => {
  console.log("child_added", snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log("child_changed", snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log("child_removed", snapshot.key, snapshot.val());
});

var todo1 = todosRef.push({
  text: 'Walk the dog'
});

var todo2 = todosRef.push({
  text: 'Walk the cat'
});
