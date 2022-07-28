import { v4 as uuid } from 'uuid';

import Todos from '../../componets/Todos/Todos';

const ADD_TODO = 'todos/AddTodo';
const DELETE_TODO = 'todos/DeleteTodo';
const TOGGLE_COMPLETED = 'todos/ToggleCompleted';
const ADD_COLOR = 'todos/AddColorToTodo';

const initialState = {
  todos: [
    { id: '1', text: 'Create Something', completed: false, color: 'green' },
    { id: '2', text: 'Learn React', completed: false, color: null },
    { id: '3', text: 'Learn Redux', completed: false, color: 'red' },
    { id: '4', text: 'Hello world', completed: true, color: null },
  ] as Array<Todo>,
};

type StateT = typeof initialState;

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  color: null | string;
};

const todoReducer = (state = initialState, action: any): StateT => {
  switch (action.type) {
    case ADD_TODO:
      let todo = {
        id: uuid(),
        text: action.payload.text,
        completed: false,
        color: null,
      };
      return {
        ...state,
        todos: [...state.todos, todo],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };

    case TOGGLE_COMPLETED:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      };

    case ADD_COLOR:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              color: action.payload.color,
            };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

//Action Creators
export const addTodoAC = (text: string) => ({
  type: ADD_TODO,
  payload: { text },
});

export const deleteTodoAC = (id: string) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleCompletedAC = (id: string) => ({
  type: TOGGLE_COMPLETED,
  payload: { id },
});

export const addColorAC = (id: string, color: string) => ({
  type: ADD_COLOR,
  payload: { id, color },
});

export default todoReducer;
