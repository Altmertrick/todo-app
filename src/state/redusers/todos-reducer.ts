import { v4 as uuid } from 'uuid';

const ADD_TODO = 'todos/AddTodo';
const DELETE_TODO = 'todos/DeleteTodo';
const TOGGLE_COMPLETED = 'todos/ToggleCompleted';
const ADD_COLOR_TODO = 'todos/AddColorToTodo';
//
const CHANGE_FILTER_STATUS = 'todos/ChangeFilterStatus';
const ADD_OR_REMOVE_FILTER_COLOR = 'todos/AddOrRemoveFilterColor';
//
const COMPLETE_ALL_TODOS = 'todos/CompleteAllTodos';
const REMOVE_COMPLETED_TODOS = 'todos/RemoveCompletedTodos';

type StatusFiltersT = {
  All: 'All';
  Active: 'Active';
  Completed: 'Completed';
};

export const statusFilters: StatusFiltersT = {
  All: 'All',
  Active: 'Active',
  Completed: 'Completed',
};

type StatusT =
  | typeof statusFilters.All
  | typeof statusFilters.Active
  | typeof statusFilters.Completed;
const initialState = {
  todos: [
    { id: '1', text: 'Create Something', completed: false, color: 'green' },
    { id: '2', text: 'Learn Something', completed: false, color: null },
    { id: '3', text: 'Solve coding problems', completed: false, color: 'red' },
    { id: '4', text: 'Hello world', completed: true, color: null },
  ] as Array<Todo>,
  filters: {
    status: statusFilters.All as StatusT,
    colors: [],
  },
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

    case ADD_COLOR_TODO:
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

    ///

    case CHANGE_FILTER_STATUS:
      return {
        ...state,
        filters: { ...state.filters, status: action.payload.status },
      };

    case ADD_OR_REMOVE_FILTER_COLOR:
      const { color, changeType } = action.payload;

      if (changeType === 'add') {
        return {
          ...state,
          filters: {
            ...state.filters,
            colors: [...state.filters.colors, color] as any,
          },
        };
      }

      if (changeType === 'remove') {
        return {
          ...state,
          filters: {
            ...state.filters,
            colors: state.filters.colors.filter((c) => c !== color) as any,
          },
        };
      }
      return state;

    case COMPLETE_ALL_TODOS:
      return {
        ...state,
        todos: state.todos.map((todo: any) => {
          if (!todo.completed) {
            return {
              ...todo,
              completed: true,
            };
          }
          return todo;
        }),
      };

    case REMOVE_COMPLETED_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
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

export const addTodoColorAC = (id: string, color: string) => ({
  type: ADD_COLOR_TODO,
  payload: { id, color },
});

///
export const changeFilterStatusAC = (status: string) => ({
  type: CHANGE_FILTER_STATUS,
  payload: { status },
});

export const addOrRemoveFilterColorAC = (
  color: string,
  changeType: string
) => ({
  type: ADD_OR_REMOVE_FILTER_COLOR,
  payload: { color, changeType },
});

///
export const completeAllTodosAC = () => ({
  type: COMPLETE_ALL_TODOS,
});

export const removeCompletedTodosAC = () => ({
  type: REMOVE_COMPLETED_TODOS,
});

export default todoReducer;
