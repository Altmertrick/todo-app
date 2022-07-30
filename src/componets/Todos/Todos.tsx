import s from './Todos.module.css';
import React from 'react';
import { selectFilteredTodos } from '../../state/selectors/selectors';

import TodoList from './TodoList/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { useState, FunctionComponent } from 'react';
import { statusFilters } from '../../state/redusers/todos-reducer';
import {
  addTodoColorAC,
  addTodoAC,
  deleteTodoAC,
  toggleCompletedAC,
} from '../../state/redusers/todos-reducer';

const Todos = (props: any) => {
  console.log('render todos ');
  const [newTodoText, setNewTodoText] = useState('');

  const todos = useSelector(selectFilteredTodos);

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
    dispatch(addTodoColorAC(id, color));
  };

  return (
    <div className={`${s.wrapper} ${s.wrapper_style}`}>
      <div>
        <form onSubmit={addTodo}>
          <input
            autoFocus
            type="text"
            placeholder="Type your todo"
            value={newTodoText}
            onChange={onInputChange}
          />
        </form>
      </div>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
        addColorTodo={addColorTodo}
      />
    </div>
  );
};

export default Todos;
