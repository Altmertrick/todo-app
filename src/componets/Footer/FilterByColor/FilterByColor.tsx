import s from './../Footer.module.css';

const FilterByColor = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      Filter by Color
      <div>
        <input type="checkbox" /> Green
      </div>
      <div>
        <input type="checkbox" /> Blue
      </div>
      <div>
        <input type="checkbox" /> Orange
      </div>
      <div>
        <input type="checkbox" /> Purple
      </div>
      <div>
        <input type="checkbox" /> Red
      </div>
    </div>
  );
};

export default FilterByColor;
