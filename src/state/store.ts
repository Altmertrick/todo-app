import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redusers/todos-reducer';

const store = configureStore({
  reducer: {
    todosSection: todoReducer,
  },
});

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

export default store;
