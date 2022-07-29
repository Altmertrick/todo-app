import s from './../Footer.module.css';
import { statusFilters } from '../../../state/redusers/todos-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilterStatusAC } from '../../../state/redusers/todos-reducer';
import { selectCurrentStatusFilter } from '../../../state/selectors/selectors';

const FilterByStatus = (props: any) => {
  const dispatch = useDispatch();

  const onStatusChanged = (status: string) => {
    dispatch(changeFilterStatusAC(status));
  };

  const currentStatusFilter = useSelector(selectCurrentStatusFilter);
  const statusFilters = ['All', 'Active', 'Completed'];

  const filterOptions = statusFilters.map((status) => (
    <div key={status}>
      <button
        className={status === currentStatusFilter ? s.selectedStatus : ' '}
        onClick={() => {
          onStatusChanged(status);
        }}
      >
        {status}
      </button>
    </div>
  ));

  return (
    <div className={s.footerSectionWrapper}>
      Filter By Status:
      {filterOptions}
    </div>
  );
};

export default FilterByStatus;
