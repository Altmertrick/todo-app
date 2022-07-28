import { FunctionComponent } from 'react';
import s from './TodoItem.module.css';

type PropsT = {
  id: string;
  text: string;
  completed: boolean;
  color: null | string;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
  addColor: (id: string, color: string) => void;
};

const colors = ['green', 'blue', 'orange', 'purple', 'red'];
const capitalize = (s: any) => s[0].toUpperCase() + s.slice(1);

const TodoItem: FunctionComponent<PropsT> = (props) => {
  const onButtonClick = () => {
    props.deleteTodo(props.id);
  };

  const onCheckboxClick = () => {
    props.toggleCompleted(props.id);
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let color = e.target.value;
    props.addColor(props.id, color);
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
          checked={props.completed}
          onClick={onCheckboxClick}
          readOnly
        />
        <span>{props.text}</span>
      </div>
      <div>
        <select
          value={props.color || undefined}
          style={{ color: props.color || ' ' }}
          onChange={onSelectChange}
        >
          <option></option>
          {colorOptions}
        </select>
        <button onClick={onButtonClick}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
