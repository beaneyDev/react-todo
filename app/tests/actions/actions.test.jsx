import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

var createMockStore = configureMockStore([thunk]);

import firebase, {firebaseRef} from 'app/firebase/';

var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate a login action', () => {
    const completedAction = {
      type: "LOGIN",
      uid: 1
    }

    const testAction = actions.logUserIn(1);
    expect(testAction).toEqual(completedAction);
  });

  it('should generate a logout action', () => {
    var completedAction = {
      type: "LOGOUT"
    }

    var testAction = actions.logUserOut();
    expect(testAction).toEqual(completedAction);
  });

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
      todo: {
        id: "1234asda",
        text: "Something to do",
        completed: false,
        createdAt: 0
      }
    };

    var testAction = actions.addTodo(completedAction.todo);
    expect(completedAction).toEqual(testAction);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'Walk the dog';
    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });

      expect(actions[0].todo).toInclude({
        text: todoText
      });

      done();
    }).catch(done);
  });

  it('should generate action for toggling a todo', () => {
    var completedAction = {
      type: "UPDATE_TODO",
      id: 1,
      updates:{completed : false}
    };

    var testAction = actions.updateTodo(1, {completed : false});

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

describe('Tests with firebase todos', () => {
  var testTodoRef;

  beforeEach((done) => {
    var todosRef = firebaseRef.child('todos');
    todosRef.remove().then(() => {
      testTodoRef = firebaseRef.child('todos').push();

      return testTodoRef.set({
        text: 'Something to do',
        completed: false,
        createdAt: 123
      })
    })
    .then(() => done())
    .catch(done);
  });

  afterEach((done) => {
    testTodoRef.remove().then(() => {
      done()
    });
  })

  it('should fetch a list of todos from firebase', (done) => {
    const store = createMockStore({});
    const action = actions.startAddTodos();

    store.dispatch(action).then(() => {
      expect(store.getActions()[1].todos.length == 1);
      expect(store.getActions()[1].type == "ADD_TODOS");
      expect(store.getActions()[1].todos[0].text == "Walk the dog");

      done();
    }).catch(done);
  });

  it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
    const store = createMockStore({});
    const action = actions.startToggleTodo(testTodoRef.key, true);

    store.dispatch(action).then(() => {
      const mockActions = store.getActions();

      expect(mockActions[1]).toInclude({
        type: 'UPDATE_TODO',
        id: testTodoRef.key
      });

      expect(mockActions[1].updates).toInclude({
        completed: true
      });

      expect(mockActions[1].updates.completedAt).toExist();
      done();
    }, done).catch(done);
  });
})
