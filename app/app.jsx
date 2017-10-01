import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase, {firebaseRef} from 'app/firebase/';
import * as actions from 'actions';
import * as router from 'app/router/';
var store = require('configureStore').configure();

router.handleOAuth();

//use for local testing of Todos.
// var credential = firebase.auth.GithubAuthProvider.credential('');
// firebase.auth().signInWithCredential(credential).catch(function(error) {
//   console.log(error);
// });

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.logUserIn(user.uid));
    listenForTodos(user.uid)
    hashHistory.push('todos');
  } else {
    store.dispatch(actions.logUserOut());
    hashHistory.push('/');
  }
});

function listenForTodos(uid) {
  store.dispatch(actions.toggleLoading());
  var todosRef = firebaseRef.child(`users/${uid}/todos`);
  todosRef.on('value', (snapshot) => {
    var todos = Object.keys(snapshot.val() || {}).map((key) => {
      var todo = snapshot.val()[key];
      return {
        id: key,
        ...todo
      }
    });

    store.dispatch(actions.addTodos(todos));
    store.dispatch(actions.toggleLoading());
  });
}

$(document).foundation();

//Load foundation and styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router.markup}
  </Provider>,
  document.getElementById('app')
);
