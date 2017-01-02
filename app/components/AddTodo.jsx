var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var value = this.refs.todoText.value;

    if(value.length > 0) {
      this.refs.todoText.value = "";
      this.props.onSubmit(value);
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="todoText" placeholder="What do you want to do?"/>
          <button className="button expanded">Submit to-do</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
