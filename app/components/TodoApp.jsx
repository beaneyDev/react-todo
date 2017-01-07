var React = require('react');
var moment = require('moment');

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
            todo.completedAt = todo.completed ? moment().unix() : undefined;
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
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      })
    },
    render: function () {
      var {todos, showCompleted, searchText} = this.state;
      var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return (
        <div>
          <TodoSearch onSearch={this.handleSearch}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <AddTodo onSubmit={this.handleAddTodo}/>
        </div>
      )
    }
})

module.exports = TodoApp;
