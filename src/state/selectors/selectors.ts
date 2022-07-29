import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from '../redusers/todos-reducer';

//Todos section

//Input selectors
const selectTodos = (state: any) => {
  return state.todosSection.todos;
};

export const selectCurrentStatusFilter = (state: any) => {
  return state.todosSection.filters.status;
};

//OutputSelector
const filterTodosByStatus = (todos: any, status: any) => {
  switch (status) {
    case statusFilters.All:
      return todos;

    case statusFilters.Active:
      return todos.filter((todo: any) => !todo.completed);

    case statusFilters.Completed:
      return todos.filter((todo: any) => todo.completed);

    default:
      return todos;
  }
};
//Memoizing selector
export const selectFilteredTodos = createSelector(
  [selectTodos, selectCurrentStatusFilter],
  filterTodosByStatus
);

//Footer section

export const selectCompleteTodosNumber = (state: any): number => {
  const todos = state.todosSection.todos.filter((todo: any) => todo.completed);
  return todos.length;
};

export const selectActiveTodosNumber = (state: any): number => {
  const todos = state.todosSection.todos.filter((todo: any) => !todo.completed);
  return todos.length;
};
