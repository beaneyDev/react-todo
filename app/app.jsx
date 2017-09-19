var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');
import firebase, {firebaseRef} from 'app/firebase/';
var actions = require('actions');

//Components
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');

var todosRef = firebaseRef.child('todos');
store.dispatch(actions.startAddTodos());

//Load foundation and styles
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
