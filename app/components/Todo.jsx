var React = require('react');
var moment = require('moment');

var Todo = React.createClass({
  render: function() {
    var {text, id, completed, createdAt, completedAt} = this.props;

    var renderDate = () => {
      var message = completed ? 'Completed: ' : 'Created: ';
      var timestamp = completed ? completedAt : createdAt;

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    }

    return (
      <div onClick={() => {
          this.props.onToggle(id)
        }}>
        <span><input type="checkbox" checked={completed}/>
        <p>{text}</p></span>
        <p>{renderDate()}</p>

      </div>
    )
  }
});

module.exports = Todo;
