var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var uuid = require('node-uuid');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  })

  it('should add a todo item', () => {
    var todoText = 'Matty';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({
      todos: []
    });

    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe('Matty');
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  })

  it('should handle a toggle request correctly', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [{
        id: 11,
        text: "Text features",
        completed: false,
        completedAt: undefined,
        createdAt: 0
      }]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt when toggled to incomplete', () => {
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: [{
        id: 11,
        text: "Text features",
        completed: true,
        completedAt: 1483815540,
        createdAt: 1483815540
      }]
    });

    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });
})
