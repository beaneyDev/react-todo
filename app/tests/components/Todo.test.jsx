var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should call a function with a todo id when it is toggled', () => {
    var todo = { id: 100, text: "Write todo.test.jsx test", completed: true };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todo} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(100);
  })
})
