import s from './../Footer.module.css';
import { FunctionComponent } from 'react';

type PropsT = {
  activeTodos: number;
  completedTodos: number;
};

const RemainingTodos: FunctionComponent<PropsT> = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      <div>
        <div>Active Todos:</div>
        <div>{props.activeTodos}</div>
      </div>

      <div>
        <div>Completed Todos:</div>
        <div>{props.completedTodos}</div>
      </div>
    </div>
  );
};

export default RemainingTodos;
