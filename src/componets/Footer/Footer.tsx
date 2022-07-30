import s from './Footer.module.css';
import { useSelector, useDispatch } from 'react-redux';

import Actions from './Actions/Actions';
import RemainingTodos from './RemainingTodos/RemainingTodos';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import FilterByColor from './FilterByColor/FilterByColor';

import {
  selectActiveTodosNumber,
  selectCompleteTodosNumber,
} from '../../state/selectors/selectors';
import {
  completeAllTodosAC,
  removeCompletedTodosAC,
} from '../../state/redusers/todos-reducer';

const Footer = (props: any) => {
  const dispatch = useDispatch();

  const completeAllTodos = () => {
    dispatch(completeAllTodosAC());
  };
  const removeCompletedTodos = () => {
    dispatch(removeCompletedTodosAC());
  };

  const completedTodos = useSelector(selectCompleteTodosNumber);
  const activeTodos = useSelector(selectActiveTodosNumber);

  return (
    <div className={`${s.wrapper} ${s.wrapper_style}`}>
      <Actions
        completeAllTodos={completeAllTodos}
        removeCompletedTodos={removeCompletedTodos}
      />
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
