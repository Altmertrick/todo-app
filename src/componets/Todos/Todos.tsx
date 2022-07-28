import s from './Todos.module.css';
import React from 'react';

import TodoList from './TodoList/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { useState, FunctionComponent } from 'react';
import {
  addColorAC,
  addTodoAC,
  deleteTodoAC,
  toggleCompletedAC,
} from '../../state/redusers/todos-reducer';

const selectTodos = (state: any) => {
  return state.todosSection.todos;
};

const Todos = (props: any) => {
  console.log('render todos ');
  const [newTodoText, setNewTodoText] = useState('');

  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  ///
  const onInputChange = (e: any) => {
    setNewTodoText(e.target.value);
  };

  //
  const addTodo = (e: any) => {
    e.preventDefault();
    dispatch(addTodoAC(newTodoText));
    setNewTodoText(' ');
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTodoAC(id));
  };

  const toggleCompleted = (id: string) => {
    dispatch(toggleCompletedAC(id));
  };

  const addColorTodo = (id: string, color: string) => {
    dispatch(addColorAC(id, color));
  };

  const status = 'helohelo';

  return (
    <div className={`${s.wrapper} ${s.wrapper_style}`}>
      <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Create your todo"
            value={newTodoText}
            onChange={onInputChange}
          />
        </form>
      </div>

      <TodoList
        status={status}
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
        addColorTodo={addColorTodo}
      />
    </div>
  );
};

export default Todos;
