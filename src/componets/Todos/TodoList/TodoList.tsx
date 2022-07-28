import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

type TodoT = {
  id: string;
  text: string;
  completed: boolean;
  color: null | string;
};

type TodoListT = {
  todos: Array<TodoT>;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
  addColorTodo: (id: string, color: string) => void;
  status: string;
};

const TodoList = React.memo<TodoListT>(
  (props: TodoListT) => {
    const todoEls = [...props.todos]
      .reverse()
      .map((todo: TodoT) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={props.deleteTodo}
          toggleCompleted={props.toggleCompleted}
          addColor={props.addColorTodo}
        />
      ));

    return <div>{todoEls}</div>;
  },
  (prevProps, nextProps) => {
    if (prevProps.todos === nextProps.todos) {
      return true; // props are equal
    }
    return false; // props are not equal -> update the component
  }
);

export default TodoList;
