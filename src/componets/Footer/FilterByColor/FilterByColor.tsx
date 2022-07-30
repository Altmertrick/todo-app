import s from './../Footer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addOrRemoveFilterColorAC } from '../../../state/redusers/todos-reducer';
import { selectColorFilters } from '../../../state/selectors/selectors';
import { ChangeTypeT } from '../../../types/types';

const FilterByColor = (props: any) => {
  const dispatch = useDispatch();

  const changeColorFilter = (color: string, changeType: ChangeTypeT) => {
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
          onClick={() => changeColorFilter(color, changeType)}
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
