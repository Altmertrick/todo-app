import s from './../Footer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addOrRemoveFilterColorAC } from '../../../state/redusers/todos-reducer';
import { selectColorFilters } from '../../../state/selectors/selectors';

const FilterByColor = (props: any) => {
  const dispatch = useDispatch();

  const addColorFilter = (color: string, changeType: string) => {
    dispatch(addOrRemoveFilterColorAC(color, changeType));
  };

  const colors = ['green', 'blue', 'orange', 'purple', 'red'];
  const selectedColors = useSelector(selectColorFilters);

  const colorFilterOptions = colors.map((color) => {
    const isChecked = selectedColors.includes(color);
    //if checkbox is checked => click => remove color
    const changeType = isChecked ? 'remove' : 'add';

    return (
      <div key={color}>
        <input
          type="checkbox"
          checked={isChecked}
          readOnly
          onClick={() => addColorFilter(color, changeType)}
        />
        <span>{color}</span>
      </div>
    );
  });

  return (
    <div className={s.footerSectionWrapper}>
      Filter by Color
      {colorFilterOptions}
    </div>
  );
};

export default FilterByColor;
