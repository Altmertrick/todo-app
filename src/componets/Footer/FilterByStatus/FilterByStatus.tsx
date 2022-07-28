import s from './../Footer.module.css';

const FilterByStatus = (props: any) => {
  return (
    <div className={s.footerSectionWrapper}>
      Filter By Status:
      <div>All</div>
      <div>Active</div>
      <div>Completed</div>
    </div>
  );
};

export default FilterByStatus;
