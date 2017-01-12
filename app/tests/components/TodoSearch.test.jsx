var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {TodoSearch} from 'TodoSearch';

describe('TodoSearch', () => {
  it('should exist', () => {
    expect(TodoSearch).toExist();
  })

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var toDoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(toDoSearch));
    toDoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(toDoSearch.refs.searchText);

    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    }

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var spy = expect.createSpy();
    var searchInput = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(searchInput));
    searchInput.refs.showCompleted.checked = true;

    TestUtils.Simulate.change(searchInput.refs.showCompleted);

    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }

    expect(spy).toHaveBeenCalledWith(action);
  })

  it('should call onSearch with proper checked value.', () => {

  })
})
