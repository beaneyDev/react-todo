var React = require('react');
var {connect} = require('react-redux');
var TodoAPI = require('TodoAPI');

import Todo from 'Todo';

export var TodoList = React.createClass({
  render: function() {
    var {todos, searchText, showCompleted} = this.props;

    var formattedSearchText = searchText ? searchText.toLowerCase() : "";
    var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, formattedSearchText);

    var renderTodos = () => {
      if(filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do!</p>
        )
      }
      return filteredTodos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
