import React from 'react';
import * as Redux from 'react-redux';

//Components
import TodoSearch from 'TodoSearch';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import * as actions from 'actions';

export var TodoApp = React.createClass({
    onLogout(e) {
      var {dispatch} = this.props;
      dispatch(actions.startLogout());
      e.preventDefault();
    },
    render() {
      return (
        <div>
          <div className="page-actions">
            <a href="#" onClick={this.onLogout}>Log out</a>
          </div>
          <h1 className="page-title">Todo App</h1>
          <div className="row">
            <div className="column small-centered small-11 medium-6 large-5">
              <div className="container">
                <TodoSearch/>
                <TodoList/>
                <AddTodo/>
              </div>
            </div>
          </div>
        </div>
      )
    }
})

export default Redux.connect()(TodoApp);
