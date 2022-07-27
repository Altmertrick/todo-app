import Todos from '../../componets/Todos/Todos';

const ADD_TODO = 'todos/AddTodo';

const initialState = {
  todos: [
    { id: 1, text: 'Create Something', completed: false, color: null },
    { id: 2, text: 'Learn React', completed: false, color: null },
    { id: 3, text: 'Learn Redux', completed: false, color: null },
  ] as Array<Todo>,
};

type Todo = {
  id: number;
  text: string;
  completed: boolean;
  color: null | string;
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

//Action Creators
export const addTodo = (todo: any) => ({
  type: ADD_TODO,
  payload: todo,
});

export default todoReducer;
