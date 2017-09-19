import moment from 'moment';
import firebase, {firebaseRef} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return {
    type: "SET_SEARCH_TEXT",
    searchText
  }
};

export var startAddTodos = () => {
  return (dispatch, getState) => {
    dispatch(toggleLoading());
    var todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      var todos = Object.keys(snapshot.val() || {}).map((key) => {
        var todo = snapshot.val()[key];
        return {
          id: key,
          ...todo
        }
      });

      dispatch(addTodos(todos));
      dispatch(toggleLoading());
    });
  }
}

export var addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    todo
  }
};

export var addTodos = (todos) => {
  return {
    type: "ADD_TODOS",
    todos
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) => {
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };

    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  }
};

export var toggleLoading = () => {
  return {
    type:"TOGGLE_LOADING"
  }
}

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    dispatch(toggleLoading());
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed: completed,
      completedAt: completed ? moment().unix() : null
    }

    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
      dispatch(toggleLoading());
    })
  }
}

export var updateTodo = (id, updates) => {
  return {
    type: "UPDATE_TODO",
    id,
    updates
  }
};

export var toggleShowCompleted = () => {
  return {
    type: "TOGGLE_SHOW_COMPLETED"
  }
};
