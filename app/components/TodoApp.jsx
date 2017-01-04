var React = require('react');

//Components
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: uuid(),
            text: 'Walk the dog'
          },
          {
            id: uuid(),
            text: 'Clean the yard'
          },
          {
            id: uuid(),
            text: 'Beaney'
          },
          {
            id: uuid(),
            text: 'Weeney'
          }
        ]
      }
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      })
    },
    handleAddTodo: function(text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text,
          }
        ]
      })
    },
    render: function () {
      var {todos} = this.state;
      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos}/>
          <AddTodo onSubmit={this.handleAddTodo}/>
        </div>
      )
    }
})

module.exports = TodoApp;
