import s from './Todos.module.css';

import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addColorAC,
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

      <div>
        {todos
          .slice()
          .reverse()
          .map((todo: any) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              color={todo.color}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              addColor={addColorTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default Todos;
