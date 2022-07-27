import { FunctionComponent } from 'react';
import s from './../Todos.module.css';

type PropsT = {
  text: string;
  completed: boolean;
};

const Todo: FunctionComponent<PropsT> = (props: any) => {
  return (
    <div className={s.todoWrapper}>
      <div>
        <input type="checkbox" checked={props.completed} readOnly />
        {props.text}
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
