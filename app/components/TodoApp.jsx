var React = require('react');

//Components
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: [
          {
            id: 1,
            text: 'Walk the dog'
          },
          {
            id: 2,
            text: 'Clean the yard'
          },
          {
            id: 3,
            text: 'Beaney'
          },
          {
            id: 4,
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
      alert("new todo: " + text)
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
