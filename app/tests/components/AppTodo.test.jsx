var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var AddTodo = require('AddTodo');

function createSpyWithValue(value) {
  var spy = expect.createSpy();
  var countDownForm = TestUtils.renderIntoDocument(<AddTodo onSubmit={spy}/>);
  var $el = $(ReactDOM.findDOMNode(countDownForm));
  countDownForm.refs.todoText.value = value;
  TestUtils.Simulate.submit($el.find('form')[0]);
  return spy;
}

describe('AppTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should submit and call the correct function', () => {
    var spy = createSpyWithValue("Test");
    expect(spy).toHaveBeenCalledWith("Test");
  });

  it('should not submit and call the correct function', () => {
    var spy = createSpyWithValue("");
    expect(spy).toNotHaveBeenCalled();
  });
})
