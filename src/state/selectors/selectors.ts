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

export const selectColorFilters = (state: any): Array<string> => {
  return state.todosSection.filters.colors;
};

//OutputSelector
const filterTodosByStatus = (
  todos: any,
  status: any,
  colors: Array<string>
) => {
  //filter active -ret !todo.completed / true (todo.completed = false)
  //filter completed -ret todo.completed = true

  const showAllTodos = status === statusFilters.All;
  const showActiveTodos = status === statusFilters.Active;
  const showCompletedTodos = status === statusFilters.Completed;

  return todos.filter((todo: any) => {
    const colorMatches = colors.length === 0 || colors.includes(todo.color);

    if (showAllTodos) {
      return colorMatches;
    }

    if (showActiveTodos) {
      return colorMatches && !todo.completed;
    }

    if (showCompletedTodos) {
      return colorMatches && todo.completed;
    }
  });
};
//Memoizing selector
export const selectFilteredTodos = createSelector(
  [selectTodos, selectCurrentStatusFilter, selectColorFilters],
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
