var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe("TodoAPI", () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
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
