var React = require('react');
var Todo = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
      return {
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
    render: function () {
      var {todos} = this.state;
      return (
        <div>
          <Todo todos={todos}/>
        </div>
      )
    }
})

module.exports = TodoApp;
