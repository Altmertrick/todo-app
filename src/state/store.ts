import { combineReducers, legacy_createStore } from '@reduxjs/toolkit';
import todoReducer from './redusers/todos-reducer';

const rootReducer = combineReducers({
  todosSection: todoReducer,
});

const store = legacy_createStore(rootReducer);
console.log(store);
declare global {
  interface Window {
    store: any;
  }
}

window.store = store;

export default store;
