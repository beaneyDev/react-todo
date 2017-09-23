import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase/';

//Slight hack to allow me to handle any OAuth responses.
//Called more or less on load of the web app, it will look for a parent opener, if it finds one, and if we have a
export var handleOAuth = () => {
  var searchParams = new URLSearchParams(window.location);
  var accessToken = "";
  searchParams.forEach((param) => {
    accessToken = param;
  });

  console.log(accessToken);

  if(window.opener && window.opener.oauth2Callback) {
     window.opener.oauth2Callback(accessToken);
     window.close();
  }
}

var requireLogin = (nextState, replace, next) => {
  if(!firebase.auth().currentUser) {
    replace('/');
  }

  next();
};

var redirectIfLoggedIn = (nextState, replace, next) => {
  if(firebase.auth().currentUser) {
    replace('/todos');
  }

  next();
};

export var markup = (
  <Router history={hashHistory}>
    <Route path="/">
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn}/>
      <Route path="/todos" component={TodoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
)
