import s from './Footer.module.css';

import Actions from './Actions/Actions';
import RemainingTodos from './RemainingTodos/RemainingTodos';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import FilterByColor from './FilterByColor/FilterByColor';
import { useSelector } from 'react-redux';

const Footer = (props: any) => {
  const selectCompleteTodos = (state: any) => {
    const todos = state.todosSection.todos.filter(
      (todo: any) => todo.completed
    );
    return todos.length;
  };

  const selectActiveTodos = (state: any) => {
    const todos = state.todosSection.todos.filter(
      (todo: any) => !todo.completed
    );
    return todos.length;
  };

  const completedTodos = useSelector(selectCompleteTodos);
  const activeTodos = useSelector(selectActiveTodos);
  return (
    <div className={`${s.wrapper} ${s.wrapper_style}`}>
      <Actions />
      <RemainingTodos
        activeTodos={activeTodos}
        completedTodos={completedTodos}
      />
      <FilterByStatus />
      <FilterByColor />
    </div>
  );
};

export default Footer;
