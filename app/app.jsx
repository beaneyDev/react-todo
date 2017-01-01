var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Components

//Load foundation and styles
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
  <p>Boilerplate 3 Project</p>,
  document.getElementById('app')
);
