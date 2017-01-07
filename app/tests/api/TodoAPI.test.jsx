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
  });

  describe('filterTodos', () => {
    var todos = [
      {
        id: 1,
        text: 'Some text here',
        completed: true
      },
      {
        id: 2,
        text: 'Other text here',
        completed: false
      },
      {
        id: 3,
        text: 'Some text here',
        completed: true
      }
    ];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      //Tutorial said to rely on length, I don't like it.
      expect(filteredTodos.length).toBe(3);
    });

    it('should only return all incomplete items', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      //Tutorial said to rely on length, I don't like it.
      expect(filteredTodos.length).toBe(1);

      //This feels more robust and will outlast me changing the dummy data.
      filteredTodos.forEach((todo) => {
        expect(todo.completed).toBe(false);
      });
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter by search term', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todo items if empty string passed in', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    })
  })
});
