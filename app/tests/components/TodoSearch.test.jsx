var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

function createSpyWithValue(searchText) {
  var spy = expect.createSpy();
  var searchInput = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
  var $el = $(ReactDOM.findDOMNode(searchInput));
  searchInput.refs.searchText.value = searchText;
  TestUtils.Simulate.change(searchInput.refs.searchText);
  return spy;
}

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })

  it('should call onSearch with entered input.', () => {
    let spy = createSpyWithValue("Test");
    expect(spy).toHaveBeenCalledWith(false, "Test");
  })

  it('should call onSearch with entered input.', () => {
    var spy = expect.createSpy();
    var searchInput = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(searchInput));
    searchInput.refs.showCompleted.checked = true;

    TestUtils.Simulate.change(searchInput.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');
  })

  it('should call onSearch with proper checked value.', () => {

  })
})
