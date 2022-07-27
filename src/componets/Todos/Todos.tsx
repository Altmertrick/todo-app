import s from './Todos.module.css';

import Todo from './Todo/Todo';

const state = {
  todos: [
    { id: 1, text: 'Create Something', completed: false, color: null },
    { id: 2, text: 'Learn React', completed: false, color: null },
    { id: 3, text: 'Learn Redux', completed: false, color: null },
  ],
};

const Todos = (props: any) => {
  return (
    <div className={s.wrapper}>
      <div>
        <input type="text" />
      </div>
      <div>
        <button>ADD TODO</button>
      </div>

      <div>
        {state.todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} completed={todo.completed} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
