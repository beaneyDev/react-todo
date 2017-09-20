var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('authReducer', () => {
    it('should set uid on logged in user', () => {
      const action = {
        type: "LOGIN",
        uid: 1
      }

      const res = reducers.authReducer(df({}), df(action));
      expect(res).toEqual({uid: 1});
    });

    it('should clear the uid on logged out user', () => {
      const action = {
        type: "LOGOUT"
      }

      const res = reducers.authReducer(df({uid: 1}), df(action));
      expect(res).toEqual({});
    });
  })

  describe('searchTextReducer', () => {
    it('should set search text on SET_SEARCH_TEXT action', () => {
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "Test"
      };

      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  })

  describe('showCompletedReducer', () => {
    it('should set show completed actions to opposite of what it was.', () => {
      var action = {
        type: "TOGGLE_SHOW_COMPLETED",
      };

      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todoReducer', () => {
    it('should toggle a todo', () => {
      var todos = [{
        id: 0,
        text: 'Walk the dog',
        completed: true,
        completedAt: 123
      }];

      var action = {
        type: "UPDATE_TODO",
        id: 0,
        updates: {completed : false, completedAt: null}
      };

      var res = reducers.todoReducer(df(todos), df(action));
      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toBe(null);
    });

    it('should add a todo', () => {
      var action = {
        type: "ADD_TODO",
        todo: {
          id: "asdads",
          text: "Something to do",
          completed: false,
          createdAt: 23232323
        }
      };

      var res = reducers.todoReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(action.todo);
    });

    it('should add todos', () => {
      var todos = [
        {
          id: 111,
          text: 'Anything',
          completed: false,
          completedAt: undefined,
          createdAt: 200
        }
      ];

      var action = {
        type: "ADD_TODOS",
        todos
      };

      var res = reducers.todoReducer(df([]), df(action));
      console.log("RESULT:", res);
      expect(res.length).toEqual(1);
      expect(res[0]).toEqual(todos[0]);
    });
  })
});
