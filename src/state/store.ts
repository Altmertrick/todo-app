import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redusers/todos-reducer';

const store = configureStore({
  reducer: {
    todosSection: todoReducer,
  },
});

export type RootStateT = ReturnType<typeof store.getState>;
export type AppDispatchT = typeof store.dispatch;

declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

export default store;
