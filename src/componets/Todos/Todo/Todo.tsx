import { FunctionComponent } from 'react';
import s from './../Todos.module.css';

type PropsT = {
  id: string;
  text: string;
  completed: boolean;
  deleteTodo: (id: string) => void;
  toggleCompleted: (id: string) => void;
};

const Todo: FunctionComponent<PropsT> = (props) => {
  const onButtonClick = () => {
    props.deleteTodo(props.id);
  };

  const onCheckboxClick = () => {
    props.toggleCompleted(props.id);
  };

  return (
    <div className={s.todoWrapper}>
      <div>
        <input
          type="checkbox"
          checked={props.completed}
          onClick={onCheckboxClick}
          readOnly
        />
        {props.text}
      </div>
      <div>
        <button onClick={onButtonClick}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
