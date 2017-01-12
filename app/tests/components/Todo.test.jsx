var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  })

  it('should dispatch toggle todo action onClick', () => {
    var todo = { id: 100, text: "Write todo.test.jsx test", completed: true };
    var spy = expect.createSpy();
    var todo = TestUtils.renderIntoDocument(<Todo {...todo} dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo));
    TestUtils.Simulate.click($el[0]);

    var action = {
      type: "TOGGLE_TODO",
      id: 100
    }

    expect(spy).toHaveBeenCalledWith(action);
  })
})
