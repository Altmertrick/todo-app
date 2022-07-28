import s from './../Footer.module.css';
import { FunctionComponent } from 'react';

type PropsT = {
  activeTodos: number;
  completedTodos: number;
};

const RemainingTodos: FunctionComponent<PropsT> = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      <div>Active Todos: {props.activeTodos}</div>
      <div>Completed Todos: {props.completedTodos}</div>
    </div>
  );
};

export default RemainingTodos;
