var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 23,
        text: "Test all files",
        completed: false
      }];

      TodoAPI.setTodos(todos);
      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {
        id: 23,
        text: "Test all files",
        completed: false
      };

      TodoAPI.setTodos(badTodos);
      
      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toBe(null);
    })
  });

  describe('getTodos', () => {
    it('should return empty array for no storage', () => {
      var emptyTodos = TodoAPI.getTodos();

      //Use toEqual because its a value comparison, not object comparison.
      expect(emptyTodos).toEqual([]);
    });

    it('should return array of Todos when those are stored', () => {
      var todos = [
        {
          id: 1,
          text: 'Beaney',
          completed: false
        },
        {
          id: 2,
          text: 'Weaney',
          completed: true
        }
      ];

      localStorage.setItem('todos', JSON.stringify(todos));

      var storedTodos = TodoAPI.getTodos();
      expect(storedTodos).toEqual(todos);
    });
  })
});
