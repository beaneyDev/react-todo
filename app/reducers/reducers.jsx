var moment = require('moment');
var uuid = require('node-uuid');

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

export var todoReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      var returnObj = [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
      return returnObj;
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if(todo.id == action.id) {
          return {
            ...todo,
            completed: !todo.completed,
            completedAt: !todo.completed ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    case "ADD_TODOS":
      var returnObj = [
          ...state,
          ...action.todos
      ];

      console.log("TODOS:", returnObj);
      return returnObj;
    default:
      return state;
  }

  return state;
};
