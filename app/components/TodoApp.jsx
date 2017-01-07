var React = require('react');

//Components
var TodoSearch = require('TodoSearch');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var uuid = require('node-uuid');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
        showCompleted: false,
        searchText: '',
        todos: TodoAPI.getTodos()
      }
    },
    componentDidUpdate: function() {
      TodoAPI.setTodos(this.state.todos);
    },
    handleSearch: function (showCompleted, searchText) {
      this.setState({
        showCompleted: showCompleted,
        searchText: searchText.toLowerCase()
      })
    },
    handleToggle: function(id) {
      var updatedTodos = this.state.todos.map((todo) => {
          if(todo.id == id) {
            todo.completed = !todo.completed;
          }

          return todo;
      });

      this.setState({
        todos: updatedTodos
      })
    },
    handleAddTodo: function(text) {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: uuid(),
            text: text,
            completed: false
          }
        ]
      })
    },
    render: function () {
      var {todos} = this.state;
      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onSubmit={this.handleAddTodo}/>
        </div>
      )
    }
})

module.exports = TodoApp;
