var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
    break
  }

  return state;
};

export var showCompletedReducer = (state = false, action) => {
  switch(action.type) {
    case "TOGGLE_SHOW_COMPLETED":
      return !state;
    default:
      return state;
  }

  return state;
}

var nextTodoId = 0;
export var todoReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      var returnObj = [
        ...state,
        {
          id: nextTodoId++,
          text: action.text
        }
      ];

      return returnObj;
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if(todo.id == action.id) {
          var newTodo = {
            ...todo,
            completed: !todo.completed,
            completedAt: todo.completed ? moment().unix() : undefined
          };
        }

        return newTodo;
      });
    default:
      return state;
  }

  return state;
};
