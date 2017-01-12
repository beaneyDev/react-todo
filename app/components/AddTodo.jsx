var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var value = this.refs.todoText.value;
    var {dispatch} = this.props;
    if(value.length > 0) {
      this.refs.todoText.value = "";
      dispatch(actions.addTodo(value));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you want to do?"/>
          <button className="button expanded">Submit to-do</button>
        </form>
      </div>
    )
  }
});

export default connect()(AddTodo);
