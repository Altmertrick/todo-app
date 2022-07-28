import React, { FunctionComponent } from 'react';
import s from './TodoItem.module.css';

type TodoT = {
  id: string;
  text: string;
  completed: boolean;
  color: null | string;
};

type PropsT = {
  todo: TodoT;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
  addColor: (id: string, color: string) => void;
};

const colors = ['green', 'blue', 'orange', 'purple', 'red'];
const capitalize = (s: any) => s[0].toUpperCase() + s.slice(1);

const TodoItem = React.memo<PropsT>(
  (props: PropsT) => {
    const { todo } = props;

    console.log('render todo id:', todo.id);

    const onButtonClick = () => {
      props.deleteTodo(todo.id);
    };

    const onCheckboxClick = () => {
      props.toggleCompleted(todo.id);
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      let color = e.target.value;
      props.addColor(todo.id, color);
    };

    const colorOptions = colors.map((c) => (
      <option key={c} value={c}>
        {capitalize(c)}
      </option>
    ));

    return (
      <div className={s.todoWrapper}>
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onClick={onCheckboxClick}
            readOnly
          />
          <span>{todo.text}</span>
        </div>
        <div>
          <select
            value={todo.color || undefined}
            style={{ color: todo.color || ' ' }}
            onChange={onSelectChange}
          >
            <option></option>
            {colorOptions}
          </select>
          <button onClick={onButtonClick}>Delete</button>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.todo === nextProps.todo) {
      return true; // props are equal
    }

    return false; // props are not equal -> update the component
  }
);

export default TodoItem;
