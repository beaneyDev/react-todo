import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from 'app/firebase/';
import * as actions from 'actions';
import * as router from 'app/router/';
var store = require('configureStore').configure();

router.handleOAuth();

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    store.dispatch(actions.logUserIn(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('todos');
  } else {
    store.dispatch(actions.logUserOut());
    hashHistory.push('/');
  }
});

$(document).foundation();

//Load foundation and styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router.markup}
  </Provider>,
  document.getElementById('app')
);
