import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import firebase from 'app/firebase/';
import * as actions from 'actions';
import router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
    hashHistory.push('todos');
  } else {
    hashHistory.push('/');
  }
});

var store = require('configureStore').configure();

store.dispatch(actions.startAddTodos());
$(document).foundation();

//Load foundation and styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
