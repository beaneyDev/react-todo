var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var completedAction = {
      type: "SET_SEARCH_TEXT",
      searchText: "Test"
    };

    var testAction = actions.setSearchText('Test');

    expect(completedAction).toEqual(testAction);
  });

  it('should generate add todo action', () => {
    var completedAction = {
      type: "ADD_TODO",
      text: "Test"
    };

    var testAction = actions.addTodo('Test');

    expect(completedAction).toEqual(testAction);
  })

  it('should generate action for toggling a todo', () => {
    var completedAction = {
      type: "TOGGLE_TODO",
      id: 1
    };

    var testAction = actions.toggleTodo(1);

    expect(completedAction).toEqual(testAction);
  });

  it('should generate action for toggling show completed', () => {
    var completedAction = {
      type: "TOGGLE_SHOW_COMPLETED",
    };

    var testAction = actions.toggleShowCompleted();

    expect(completedAction).toEqual(testAction);
  });

  it('should generate action for toggling show completed', () => {
    var todos = [
      {
        id: 111,
        text: "Anything",
        completed: false,
        completedAt: undefined,
        createdAt: 200
      }
    ];

    var completedAction = {
      type: "ADD_TODOS",
      todos: todos
    };

    var testAction = actions.addTodos(todos);

    expect(completedAction).toEqual(testAction);
  });
});
