import s from './Footer.module.css';

import Actions from './Actions/Actions';
import RemainingTodos from './RemainingTodos/RemainingTodos';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import FilterByColor from './FilterByColor/FilterByColor';
import { useSelector } from 'react-redux';
import {
  selectActiveTodosNumber,
  selectCompleteTodosNumber,
} from '../../state/selectors/selectors';

const Footer = (props: any) => {
  const completedTodos = useSelector(selectCompleteTodosNumber);
  const activeTodos = useSelector(selectActiveTodosNumber);

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
