import s from './Todos.module.css';

import Todo from './Todo/Todo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addTodoAC,
  deleteTodoAC,
  toggleCompletedAC,
} from '../../state/redusers/todos-reducer';

const state = {
  todos: [
    { id: 1, text: 'Create Something', completed: false, color: null },
    { id: 2, text: 'Learn React', completed: false, color: null },
    { id: 3, text: 'Learn Redux', completed: false, color: null },
  ],
};

const selectTodos = (state: any) => {
  return state.todosSection.todos;
};

const Todos = (props: any) => {
  const [newTodoText, setNewTodoText] = useState('');

  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  ///
  const onInputChange = (e: any) => {
    setNewTodoText(e.target.value);
  };

  //
  const addTodo = () => {
    dispatch(addTodoAC(newTodoText));
    setNewTodoText(' ');
  };

  const deleteTodo = (id: string) => {
    dispatch(deleteTodoAC(id));
  };

  const toggleCompleted = (id: string) => {
    dispatch(toggleCompletedAC(id));
  };

  return (
    <div className={s.wrapper}>
      <div>
        <input
          type="text"
          placeholder="Create your todo"
          value={newTodoText}
          onChange={onInputChange}
        />
      </div>
      <div>
        <button onClick={addTodo}>ADD TODO</button>
      </div>

      <div>
        {todos.map((todo: any) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            deleteTodo={deleteTodo}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
