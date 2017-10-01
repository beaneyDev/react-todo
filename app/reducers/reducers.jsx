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
};

export var loadingReducer = (state = false, action) => {
  switch(action.type) {
    case "TOGGLE_LOADING":
      return !state;
    default:
      return state;
  }
}

export var todoReducer = (state = [], action) => {
  switch(action.type) {
    case "ADD_TODO":
      var returnObj = [
        ...state,
        action.todo
      ];
      return returnObj;
    case "UPDATE_TODO":
      return state.map((todo) => {
        if(todo.id == action.id) {
          return {
            ...todo,
            ...action.updates
          };
        } else {
          return todo;
        }
      });
    case "ADD_TODOS":
      var returnObj = [
          ...action.todos
      ];

      return returnObj;
    case "LOGOUT":
      return [];
    default:
      return state;
  }

  return state;
};

export var authReducer = (state = {}, action) => {
  switch(action.type) {
    case "LOGIN":
      return {
        uid: action.uid
      }
    case "LOGOUT":
      return {};
    default:
      return state;
  }
}
